const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstname: {type: String, required: true},
  lastname: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  profileImage: {type: String},
  isAuthor: {type: Boolean, default: false},
  ownBooks: [{type: Schema.Types.ObjectId, ref: "Book"}],
  nowReading: [{type: Schema.Types.ObjectId, ref: "Book"}],
 favoriteBooks: [{type: Schema.Types.ObjectId, ref: "Book"}],
 readList: [{type: Schema.Types.ObjectId, ref: "Book"}],
 bookmarks: [{type: Schema.Types.ObjectId, ref: "Bookmark"}]
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});


const User = mongoose.model('User', userSchema);

module.exports = User;