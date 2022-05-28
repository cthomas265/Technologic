const { Comment } = require('../models');

const commentData = [
  {
    body: 'Printemps'
  },
  {
    body: 'Sommer'
  },
  {
    body: 'Herfst',
  },
  {
    body: 'Invierno',
  },
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;
