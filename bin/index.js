#!/usr/bin/env node

'use strict';

const main = require('../lib');
const fetchMemberInfo = require('../lib/fetch-member-info');

const commands = process.argv.slice(2);

if (commands[0] === '-v' || commands[0] === '--version') {
  console.log(`Version: ${require('../package.json').version}`);
  process.exit(0);
}

fetchMemberInfo()
  .then((data) => main(data))
  .catch((err) => process.exit(0)); // [TODO] fix
