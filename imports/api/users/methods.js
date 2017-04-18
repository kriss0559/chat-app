// Methods related to links

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import { Users } from './users.js';

Meteor.methods({
  'users.insert'(registerEmail, registerPassword) {
    check(registerEmail, String);
    check(registerPassword, String);
console.log();
    return Users.insert({
      registerEmail,
      registerPassword,
      createdAt: new Date(),
    });
  },
});
