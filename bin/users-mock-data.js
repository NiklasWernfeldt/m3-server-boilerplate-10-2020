const users = [
    {
     firstname: "Niklas",
     lastname: "Wernfeldt",
     email: "niklas@gmail.com",
     password: "wqre23421d",
     profileImage: "",
     isAuthor: false, /* not done in seed */
     ownBooks: [], /* not done in seed */
     nowReading: [], /* not done in seed */
     favoriteBooks: [], /* not done in seed */
     readList: [],  /* not done in seed */
     bookmarks: []  /* not done in seed */
    }
]

module.exports = users

/*firstname: {type: String, required: true},
  lastname: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  profileImage: {type: String},
  isAuthor: {type: Boolean, default: false},
  ownBooks: [{type: Schema.Types.ObjectId, ref: "Book"}],
  nowReading: [{type: Schema.Types.ObjectId, ref: "Book"}],
 favoriteBooks: [{type: Schema.Types.ObjectId, ref: "Book"}],
 readList: [{type: Schema.Types.ObjectId, ref: "Book"}],
 bookmarks: [{type: Schema.Types.ObjectId, ref: "Bookmark"}] */