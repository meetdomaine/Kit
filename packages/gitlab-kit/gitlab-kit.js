const fetch = require('node-fetch')
const {
  log,
  error,
  title,
  subtitle,
  newLines,
  completedAction
} = require('@halfhelix/terminal-kit')
const {
  getBranch
} = require('@halfhelix/configure').utils

const getBranchAndValidate = async (settings) => {
  const branch = await settings['git.getBranch'](settings, getBranch)

  if (~['master', 'production'].indexOf(branch)) {
    throw new Error('Gitlab pipelines cannot run on production or master branches')
  }

  const gitlabBranch = await getGitlabBranch(branch, settings)

  if (!gitlabBranch || !gitlabBranch.name) {
    error('Gitlab branch not found')
    process.exit(1)
  }

  return branch
}

const getGitlabBranch = async (branch, settings) => {
  completedAction('Getting Gitlab branches')
  return fetch(`https://gitlab.com/api/v4/projects/${settings['git.gitlabProjectId']}/repository/branches/${encodeURIComponent(branch)}`, {
    method: 'get',
    headers: {
      'PRIVATE-TOKEN': settings['git.gitlabToken'],
      'Accept': 'application/json'
    }
  }).then(response => {
    return response.json()
  }).then(data => {
    if (data.message || data.error) {
      error(`getGitlabBranch: ${data.message || data.error}`)
      return Promise.resolve(false)
    }
    return Promise.resolve(data)
  })
}

const createMergeRequest = async (branch, settings) => {
  const mergeRequests = await getMergeRequests(settings)
  const foundMergeRequest = (mergeRequests || []).find(mergeRequest => {
    return mergeRequest['source_branch'] === branch
  })
  if (foundMergeRequest) {
    completedAction('Existing merge request found')
    return foundMergeRequest
  }

  const assignee = await getAssignee(settings)
  const target = settings['git.targetBranch'](branch, settings)

  completedAction('Creating merge request')
  return fetch(`https://gitlab.com/api/v4/projects/${settings['git.gitlabProjectId']}/merge_requests?state=opened`, {
    method: 'post',
    headers: {
      'PRIVATE-TOKEN': settings['git.gitlabToken'],
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      ...settings['git.gitlabMergeRequestConfig'],
      source_branch: branch,
      title: settings['git.gitlabMergeRequestTitle'](branch, target, settings),
      target_branch: target,
      assignee_id: assignee.id || null
    })
  }).then(response => {
    return response.json()
  }).then(data => {
    if (data.message || data.error) {
      error(`createMergeRequest: ${data.message || data.error}`)
    }
    return Promise.resolve(data)
  })
}

const getMergeRequests = (settings) => {
  completedAction('Getting merge requests')
  return fetch(`https://gitlab.com/api/v4/projects/${settings['git.gitlabProjectId']}/merge_requests?state=opened`, {
    method: 'get',
    headers: {
      'PRIVATE-TOKEN': settings['git.gitlabToken'],
      'Accept': 'application/json'
    }
  }).then(response => {
    return response.json()
  }).then(data => {
    if (data.message || data.error) {
      error(`getMergeRequests: ${data.message || data.error}`)
      return Promise.resolve(false)
    }
    return Promise.resolve(data)
  })
}

const getAssignee = (settings) => {
  completedAction('Getting project members')
  return fetch(`https://gitlab.com/api/v4/projects/${settings['git.gitlabProjectId']}/members/all`, {
    method: 'get',
    headers: {
      'PRIVATE-TOKEN': settings['git.gitlabToken'],
      'Accept': 'application/json'
    }
  }).then(response => {
    return response.json()
  }).then(data => {
    if (data.message || data.error) {
      error(`getAssignee: ${data.message || data.error}`)
    }
    return Promise.resolve(
      (data.filter(user => user['username'] == settings['git.maintainer']) || []).pop()
    )
  })
}

const getCommits = async (mergeRequest, settings) => {
  completedAction('Getting merge request commits')
  return fetch(`https://gitlab.com/api/v4/projects/${settings['git.gitlabProjectId']}/merge_requests/${mergeRequest.iid}/commits`, {
    method: 'get',
    headers: {
      'PRIVATE-TOKEN': settings['git.gitlabToken'],
      'Accept': 'application/json'
    }
  }).then(response => {
    return response.json()
  }).then(data => {
    if (data.message || data.error) {
      error(`getCommits: ${data.message || data.error}`)
      return Promise.resolve(false)
    }
    return Promise.resolve(data)
  })
}

const lintCommits = async (branch, mergeRequest, settings) => {
  const commits = await getCommits(mergeRequest, settings)
  if (!commits || !commits.length) {
    process.exitCode = 1
    return error(`Unable to find commits to validate`)
  }

  if (commits.every(commit => (
    settings['git.emailValidator'](commit, settings)
  ))) {
    completedAction(`Email validation passed`)
  } else {
    error(`Email validation not passed`)
    process.exitCode = 1
  }
  if (commits.every(commit => (
    settings['git.messageValidator'](commit, settings)
  ))) {
    completedAction(`Commit message validation passed`)
  } else {
    error(`Commit message validation not passed`)
    process.exitCode = 1
  }
  if (settings['git.branchValidator'](branch, settings)) {
    completedAction(`Branch name validation passed`)
  } else {
    error(`Branch name validation not passed`)
    process.exitCode = 1
  }

  displayCommitReel(commits)
}

const displayCommitReel = (commits) => {
  completedAction('Validation complete for the following commits:')
  log(newLines())
  commits.forEach(({committer_email, author_email, title: commit}) => {
    log(title(`${commit}`))
    log(subtitle(`Author: ${author_email}`))
    log('-------')
    return true
  })
}

module.exports = async (action, settings) => {
  const branch = await getBranchAndValidate(settings)

  completedAction(`Conditionally creating merge request`)
  const mergeRequest = await createMergeRequest(branch, settings)

  if (action === 'commits/lint') {
    await lintCommits(branch, mergeRequest, settings)
  }

  return Promise.resolve(action)
}