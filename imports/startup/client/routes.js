import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import needed templates
import '../../ui/layouts/body/body.js';
// import '../../ui/pages/home/home.js';
// import '../../ui/pages/chat/chat.js';
import '../../ui/pages/user/user.js';
import '../../ui/pages/not-found/not-found.js';

// Set up all routes in the app
FlowRouter.route('/', {
  name: 'App.home',
  action() {
    BlazeLayout.render('App_body', { main: 'App_home' });
  },
});
// Set up all routes in the app
FlowRouter.route('/register', {
  name: 'App.register',
  action() {
    BlazeLayout.render('App_body', { main: 'Chat_register' });
  },
});

// Set up all routes in the app
FlowRouter.route('/chat', {
  name: 'App.chat',
  action() {
    BlazeLayout.render('App_body', { main: 'Chat_home' });
  },
});


FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_body', { main: 'App_notFound' });
  },
};
