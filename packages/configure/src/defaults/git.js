module.exports = {
  'git.gitlabToken': '',
  'git.refName': process.env.CI_COMMIT_REF_NAME,
  'git.gitlabProjectId': process.env.CI_PROJECT_ID,
  'git.gitlabMergeRequestConfig': {
    remove_source_branch: true
  },
  'git.gitlabMergeRequestTitle'(branch, targetbranch, settings) {
    return `[WIP] ${branch} into ${targetbranch}`
  },
  'git.targetBranch'(branch, settings) {
    return 'master'
  },
  'git.maintainer': 'maxrolon',
  'git.username': false,
  'git.getDate'(settings, fallback) {
    return fallback()
  },
  'git.getCommit'(settings, fallback) {
    return fallback()
  },
  'git.getBranch'(settings, fallback) {
    if (settings['git.refName']) {
      return Promise.resolve(settings['git.refName'])
    }
    return fallback()
  },
  'git.getUsername'(settings, fallback) {
    if (settings['git.username']) {
      return Promise.resolve(settings['git.username'])
    }
    return fallback()
  },
  'git.emailRegex': /@halfhelix.com/,
  'git.emailValidator'(commit, settings) {
    const { committer_email: committer, author_email: author } = commit
    return (
      // settings['git.emailRegex'].test(committer) &&
      settings['git.emailRegex'].test(author)
    )
  },
  'git.messageValidator'(commit, settings) {
    return commit.title.split(' ').length > 1
  },
  'git.branchValidator'(branch, settings) {
    return /master|production|feature\/|bugfix\/|qa\//.test(branch)
  },
  'git.builtThemeCommitMessage'(settings) {
    return 'Update from source code repository'
  },
  'git.githubRepositoryUrl': ''
}
