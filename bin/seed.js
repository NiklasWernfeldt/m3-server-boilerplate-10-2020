const mongoose = require('mongoose');
const Book = require('./../models/book.model');
const Bookmark = require('./../models/bookmark.model');
const User = require('./../models/user.model');
const Page = require('./../models/page.model');
const PublicBooks = require('./../models/publicbooks.model');

const books = require('./books-mock-data');
const users = require('./users-mock-data');
const bookmarks = require('./bookmarks-mock-data');
const pages = require('./pages-mock-data');
const publicbooks = require('./publicbooks-mock-data');

const DB_NAME = 'bookway-seed';


// SEED SEQUENCE:

    // CONNECT TO MONGO DB (MONGOOSE)
mongoose
  .connect(`mongodb://localhost:27017/${DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then( (x) => {
    // AFTER CONNECTION , DROP THE EXISTING DATABASE
    console.log("Connected to DB" + DB_NAME);

    const pr = x.connection.dropDatabase();

    return pr;
  })
  .then( () => {
    // CREATE THE USERS

    const pr = User.create( users );
    return pr;
  })
  .then( (createdUsers) => {
    console.log(`Created ${createdUsers.length} users`);


    // UPDATE THE BOOKS - SET THE `author` field and add the id of the author
    const updatedBooks = books.map( ( bookObj, i) => {
      const userObj = createdUsers[i];
      bookObj.author =  userObj._id ;
      
      return bookObj;
    })

    console.log('updatedBooks', updatedBooks)

    // CREATE THE BOOKS
    const pr = Book.create( updatedBooks);

    return pr;
  })
  .then( (createdBooks) => {
    console.log(`Created ${createdBooks.length} books`);

    // UPDATE THE PAGES - SET THE ` book ` field with the id of the book
    const updatedPages = pages.map( ( pagesArray, i) => {
      const bookObj = createdBooks[i];
     pagesArray.forEach((page) => {
       page.book = bookObj._id
     })

     
      return pagesArray;
    })
    const flatPagesArray = updatedPages.flat()


      // CREATE THE PAGES
      const pr = Page.create( flatPagesArray);

      return pr;
    
  })
  .then((createdPages) => {
    // Use this object as dictionary of updates
    /*
    {
      "bookId1": [pageId1, pageid2, ... ],
      "bookId2": [pageId11, pageid12, ... ],
    }
    */
    bookUpdates = {};

    for (let i = 0; i < createdPages.length; i++) {
      const page = createdPages[i];
      const bookId = page.book;
      if (!bookUpdates[bookId]) {
        bookUpdates[bookId] = [page._id]
      }
      else if (bookUpdates[bookId]) {
        bookUpdates[bookId].push(page._id)
      }
      
    }
    //  Object.keys(bookUpdates)  ==> ["bookId1", "bookId2"]
    const prs = Object.keys(bookUpdates).map(( bookId ) => {
      return Book.findByIdAndUpdate(bookId, { pages: bookUpdates[bookId] })
    })

    const bigPromise = Promise.all(prs);
    return bigPromise;


 
})
.then((updatedBooks) => {
 const prs = updatedBooks.map((book) => {
    const userId = book.author
    const bookId = book._id

   return User.findByIdAndUpdate(userId, {ownBooks: [bookId]})
  })

  return Promise.all(prs)
  
  })
  .then(() => {
    // create the publicbooks field in the database
    const pr = PublicBooks.create(publicbooks)
    return pr

    
  })
  .then(() => {
     // CLOSE THE DB CONNECTION
    mongoose.connection.close(); // MOVE THIS FUTHER DOWN
  })


