'use strict';

const prURL = 'https://github.com/nodejs/node/pull/';

const createFormat = (pr, reviewers) => {
  return `PR-URL: ${prURL}${pr}\n${
  reviewers.map((reviewer) => `Reviewed-By: ${reviewer}`).join('\n')}`;
};

module.exports = createFormat;
