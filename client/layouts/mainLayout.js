Template.mainLayout.onCreated(function () {
  this.subscribe('allUsers')
  this.subscribe('allStartups')
  this.subscribe('allInvestments')
  this.subscribe('allConversations')
  this.subscribe('allMessages')
})

Template.mainLayout.helpers({
  'isLogged': function () {
    return Meteor.user()
  },

  'userName': function () {
    return Meteor.user().name
  }
})

Template.mainLayout.events({
  'click .logout': function (event) {
    event.preventDefault()
    Meteor.logout()
  },

  'click .profile': function (event) {
    event.preventDefault();
    Router.go('profile');
  }
})
