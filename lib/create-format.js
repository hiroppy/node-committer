'use strict';

const prURL = 'https://github.com/nodejs/node/pull/';
const issueURL = 'https://github.com/nodejs/node/issues/';

const createFormat = (pr, reviewers, issue) => {
  return `PR-URL: ${prURL}${pr}\n` +
  (issue !== '' ? `Fixes: ${issueURL}${issue}\n` : '') +
  reviewers.map((reviewer) => `Reviewed-By: ${reviewer}`).join('\n');
};

module.exports = createFormat;
