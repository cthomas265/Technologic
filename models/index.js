const User = require('./User');
const Comment = require('./Comment');
const Post = require('./Post');

//Possible that foreignKey needs to be postId/userId??? 
Post.hasMany(Comment, {
    foreignKey: 'postId',
    onDelete: 'cascade',
});

Comment.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'cascade',
});

Post.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'cascade',
})

module.exports = { User, Comment, Post };
