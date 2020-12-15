const express = require("express")
const router = express.Router()
const createError = require("http-errors")
const Book = require("./../models/book.model")
const PublicBooks = require("./../models/publicbooks.model")

const {
    isLoggedIn,
    isNotLoggedIn,
    validationLogin
  } = require("../helpers/middlewares");

router.get("/" , (req, res, next) => {
   PublicBooks.find()
   .populate("books")
   .then((publicBooksListArr) => {
     const bookList = publicBooksListArr[0];
     const books = bookList.books;
       res.status(200).json(books)

       
   })
   .catch((err) => next(createError(err)))
})

module.exports = router