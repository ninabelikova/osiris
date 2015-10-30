if (Posts.find().count() === 0) {
  Posts.insert({
    title: 'I love OPUS!',
    url: 'http://google.com'
  });

  Posts.insert({
    title: 'WHere is Lise?',
    url: 'http://meteor.com'
  });

  Posts.insert({
    title: 'The meteor book',
    url: 'http://themeteorbook.com'
  });
}
