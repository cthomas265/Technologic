const { Post } = require('../models');

const postData = [
  {
    body: 'Printemps',
    title: 'Printemps',
  },
  {
    body: 'Sommer',
    title: 'Sommer',
  },
  {
    body: 'Herfst',
    title: 'Herfst',
  },
  {
    body: 'Invierno',
    title: 'Invierno',
  },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;
