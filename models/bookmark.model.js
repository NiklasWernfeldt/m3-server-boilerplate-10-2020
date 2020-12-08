const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookmarkSchema = new Schema({
    book: {type: Schema.Types.ObjectId, ref: "Book"},
    bookmarkPage: {type: Number}
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});


const Bookmark = mongoose.model('Bookmark', bookmarkSchema);

module.exports = Bookmark;