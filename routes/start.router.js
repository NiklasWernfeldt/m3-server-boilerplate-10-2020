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
   .then((allBooks) => {
       console.log(allBooks)
       res.status(200).json({allBooks})
   })
})

module.exports = router