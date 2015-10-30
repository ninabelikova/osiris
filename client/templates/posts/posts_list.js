var postsData = [
  {
    title: "Introducing Osiris!",
    url: 'http://google.com'
  },
  {
    title: 'My first ios app made money!',
    url: 'http://meteor.com'
  },
  {
    title: 'Meteor is the best!',
    url: 'http://themeteorbook.com'
  }
];

Template.postsList.helpers({
  posts: postsData
});
