'use strict';

const inquirer = require('inquirer');
const createFormat = require('./create-format');

const questions = [
  {
    type    : 'input',
    name    : 'pr',
    message : 'What\'s Pull-Request number?',
    validate: (v) => {
      if (v.match(/[1-9]+/)) return true;
      return false;
    }
  },
  {
    type   : 'checkbox',
    name   : 'reviewer',
    choices: [],
    message: 'Who made this review?'
  },
  {
    type    : 'input',
    name    : 'issue',
    message : 'What\'s Issue number?',
    validate: (v) => {
      if (v.match(/[1-9]*/)) return true;
      return false;
    }
  }
];

const main = (memberList) => {
  questions[1].choices = Object.keys(memberList);
  questions[1].choices.push(new inquirer.Separator('-----------'));

  inquirer
    .prompt(questions)
    .then((ans) => {
      const reviewers = ans.reviewer.map((e) => memberList[e]);

      console.log();
      console.log(createFormat(ans.pr, reviewers, ans.issue));
    });
};

module.exports = main;
