import './user.html';
import { Users } from '../../api/users/users.js';


if (Meteor.isClient) {

    Template.Chat_register.events({
    'submit form': function(event){
        event.preventDefault();
        var emailVar = event.target.registerEmail.value;
        var passwordVar = event.target.registerPassword.value;

          Meteor.call('users.insert', emailVar,passwordVar);
      //   Accounts.createUser({
      //     email: emailVar,
      //     password: passwordVar
      //  });
        console.log("Form submitted.");
    }
});
Template.Chat_login.events({
    'submit form': function(event) {
        event.preventDefault();
        var emailVar = event.target.loginEmail.value;
        var passwordVar = event.target.loginPassword.value;
        Meteor.loginWithPassword(emailVar, passwordVar);
        console.log("Form submitted.");
    }
});
Template.Chat_dashboard.events({
    'click .logout': function(event){
        event.preventDefault();
          Meteor.logout();
    }
});
}
