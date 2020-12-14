const express = require("express")
const router = express.Router()
const createError = require("http-errors")
const Book = require("./../models/book.model")
const Page = require("./../models/page.model")
const User = require("./../models/user.model")
const PublicBooks = require("./../models/publicbooks.model")

const {
    isLoggedIn,
    isNotLoggedIn,
    validationLogin
  } = require("../helpers/middlewares");

  // GET ONE BOOK
router.get("/:id" , isLoggedIn, (req, res, next) => {
    const bookId = req.params.id
   Book.findById(bookId)
   .populate("author")
   .populate("pages")
   .then((book) => {
       res.status(200).json({book: book})
   })
   .catch((err)=>next(createError(err)))
})

 // THE PLUS BUTTON (NAV) NAVIGATES (frontend) TO THE FORM 
 // WHERE THE CREATE BUTTON IS AND CREATE THE BOOK WITH 
 //THE CREATE BUTTON, (Frontend navigates to "My Book View")
router.post("/create", isLoggedIn ,(req, res, next) => {
  console.log("req.body",req.body)
  const {title, description, genre, coverImage} = req.body
  const userId = req.session.currentUser._id
  Book.create({title, description, genre, coverImage, author: userId})
  .then((createdBook) => {
    User.findByIdAndUpdate(userId,{$push: {ownBooks: createdBook._id}, $set: {isAuthor: true} }, {new: true})
    .then((updatedUser) => {
      res.status(200).json({updatedUser})
    })
  })
  .catch((err)=>next(createError(err)))
})

// THE EDIT BUTTON ON "MY BOOK VIEW" AND SAVE BUTTON 
// ON WRITE MODE THIS ROUTE CREATES  
// A NEW PAGE AND ( THE EDIT BTN frontend navigates 
// to write mode apge)
router.post("/edit/:bookId", isLoggedIn ,(req, res, next) => {
  const { bookId} = req.params
const {pagenr} = req.query
  const { text, pageImage } = req.body
  Page.create({pageNumber: pagenr, text, pageImage, book: bookId})
  .then((createdPage) => {

    Book.findByIdAndUpdate(bookId, {$push: {pages: createdPage._id}}, {new: true})
    .then((updatedBook) => {
      res.status(200).json({updatedBook})
    })
    
  })
})

// GET ONE PAGE
router.get("/:pageid", (req, res, next) => {
    const {pageid} = req.params
    Page.findById(pageid)
    .then((page) => {
      res.status(200).json({page})
    })
})

// UPDATES A PAGES TEXT AND PAGEIMAGE
router.put("/editpage/:pageid", (req, res, next) => {
    const {pageid} = req.params
    const {text, pageImage} = req.body
    Page.findByIdAndUpdate(pageid,{text, pageImage},{new: true})
    .then((updatedPage) => {
      res.status(200).json({updatedPage})
    })
    .catch((err) => next(createError(err)))
})

// UPLOADS A BOOK TO THE PUBLIC BOOK MODEL 
router.post("/upload/:bookid", (req, res, next) => {
  const {bookid} = req.params
  Book.findById(bookid)
  .then((foundBook) => {
    PublicBooks.findByIdAndUpdate("5fd34386d7010c1e703b19d9", {$push: {books: foundBook._id}}, {new: true})
    .then((publishedBook) => {
      res.status(200).json({publishedBook})
    })
    .catch((err) => next(createError(err)))
  })
  .catch((err) => next(createError(err)))
})

module.exports = router

