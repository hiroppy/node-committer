'use strict';

const axios = require('axios');
const readmeURL = 'https://raw.githubusercontent.com/nodejs/node/master/README.md';

const fetchMemberInfo = () => {
  const users = {};

  return axios
    .get(readmeURL)
    .then((res) => {
      const strs = res.data.split('\n');

      for (let i = 0; i < strs.length; i++) {
        const user = strs[i];

        if (user.match(/\* \[.*]\(https:\/\/github.com\/.*\) -$/) !== null) {
          const key = user
            .match(/\[.*\]/g)[0]
            .slice(1, -1);

          const info = strs[i + 1]
            .replace(/\*\*/g, '')
            .replace('&lt;', '<')
            .replace('&gt;', '>')
            .replace(/ \(.*\)$/g, ''); // personal pronoun

          users[key] = info;
          i++;
        }
      }

      return users;
    });
};

module.exports = fetchMemberInfo;
