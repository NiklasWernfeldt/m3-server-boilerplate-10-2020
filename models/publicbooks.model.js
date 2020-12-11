const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const publicBooksSchema = new Schema({

    books: [{type: Schema.Types.ObjectId, ref: "Book"}]

});


const PublicBooks = mongoose.model('Publicbook', publicBooksSchema);

module.exports = PublicBooks;