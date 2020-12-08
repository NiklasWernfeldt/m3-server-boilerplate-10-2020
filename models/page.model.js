const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pageSchema = new Schema({
    pageNumber: {type: Number},
text: {type: String},
pageImage: {type: String},
book: {type: Schema.Types.ObjectId, ref: "Book"}
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});


const Page = mongoose.model('Page', pageSchema);

module.exports = Page;