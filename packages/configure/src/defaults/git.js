module.exports = {
  // Gitlab authentication token to use to connect to Gitlab
  'git.gitlabToken': '',
  // The ref name to use to retrieve information like git branch
  // "CI_COMMIT_REF_NAME" is exposed in a Gitlab runner by default
  // @see https://docs.gitlab.com/ee/ci/variables/predefined_variables.html
  'git.refName': process.env.CI_COMMIT_REF_NAME,
  // The Gitlab project ID of the connected repository
  // @see https://docs.gitlab.com/ee/ci/variables/predefined_variables.html
  'git.gitlabProjectId': process.env.CI_PROJECT_ID,
  // The payload used to generate the Gitlab merge request
  // "source_branch", "title", "target_branch", "assignee_id" are automatically set
  'git.gitlabMergeRequestConfig': {
    remove_source_branch: true
  },
  // The default title for the generated MR
  'git.gitlabMergeRequestTitle'(branch, targetbranch, settings) {
    return `[WIP] ${branch} into ${targetbranch}`
  },
  // The default branch name to set as the target for generated MRs
  'git.targetBranch'(branch, settings) {
    return 'master'
  },
  // The Gitlab user handle to set as the assigner for generated MRs
  'git.maintainer': '',
  // Hardcode the Git user name (used in theme naming)
  'git.username': false,
  // Change the way that the current date is retrieved (used in theme naming)
  'git.getDate'(settings, fallback) {
    return fallback()
  },
  // Change the way that the latest commit hash is retrieved (used in theme naming)
  'git.getCommit'(settings, fallback) {
    return fallback()
  },
  // Change the way that the current branch is retrieved
  'git.getBranch'(settings, fallback) {
    if (settings['git.refName']) {
      return Promise.resolve(settings['git.refName'])
    }
    return fallback()
  },
  // Change the way that the Git user is retrieved
  'git.getUsername'(settings, fallback) {
    if (settings['git.username']) {
      return Promise.resolve(settings['git.username'])
    }
    return fallback()
  },
  // Approved commit emails to accept
  'git.emailRegex': /@halfhelix.com/,
  // Override the commit email validator function
  'git.emailValidator'(commit, settings) {
    const { committer_email: committer, author_email: author } = commit
    return (
      // settings['git.emailRegex'].test(committer) &&
      settings['git.emailRegex'].test(author)
    )
  },
  // Override the commit message validator function
  'git.messageValidator'(commit, settings) {
    return commit.title.split(' ').length > 1
  },
  // Override the branch name validator function
  'git.branchValidator'(branch, settings) {
    return /master|production|feature\/|bugfix\/|qa\//.test(branch)
  }
}
