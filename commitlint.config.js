const automaticCommitPattern = /^release\(version\):.*\[skip ci]/;

export default {
  extends: [
    '@commitlint/config-conventional'
  ],
  ignores: [
    commitMsg => automaticCommitPattern.test(commitMsg)
  ]
};
