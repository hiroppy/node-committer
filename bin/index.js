#!/usr/bin/env node

'use strict';

const main = require('../lib');
const fetchMemberInfo = require('../lib/fetch-member-info');

const commands = process.argv.slice(2);

if (commands[0] === '-v' || commands[0] === '--version') {
  console.log(`Version: ${require('../package.json').version}`);
  process.exit(0);
}

if (commands[0] === '-h' || commands[0] === '--help') {
  console.log(
    'FYI: https://github.com/nodejs/node/blob/master/COLLABORATOR_GUIDE.md#landing-pull-requests'
  );
  process.exit(0);
}

fetchMemberInfo()
  .then((data) => main(data))
  .catch((err) => console.error('Can not fetch from nodejs/node/README.md.'));
