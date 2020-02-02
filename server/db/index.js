const db = require('./db')
const Author = require('./Author')
const Comment = require('./Comment')
const Story = require('./Story')

// the foriegn key for target model Author is in  the source, the Story table.
Author.hasMany(Story);
Story.belongsTo(Author);

// The foriegn key is in the Comment table
Author.hasMany(Comment);
Comment.belongsTo(Author);

// The foriegn key is in the Comment table
Story.hasMany(Comment);
Comment.belongsTo(Story);

module.exports = {
  db,
  Author,
  Comment,
  Story
}
