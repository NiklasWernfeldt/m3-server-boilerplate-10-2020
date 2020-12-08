const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    genre: {type: String, required: true},
    views: {type: Number},
    earnedCash: {type: Number},
    coverImage: {type: String, required: true},
    pages: [{type: Schema.Types.ObjectId, ref: "Page"}],
    author: {type: Schema.Types.ObjectId, ref: "User"} 
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});


const Book = mongoose.model('Book', bookSchema);

module.exports = Book;