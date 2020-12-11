const express = require("express")
const router = express.Router()
const createError = require("http-errors")
const User = require("./../models/user.model")
const Book = require("./../models/book.model")

const {
    isLoggedIn,
    isNotLoggedIn,
    validationLogin
  } = require("../helpers/middlewares");

  // ADDS BOOK TO READLIST
  router.post("/postpone/:id", isLoggedIn, (req, res, next) => {
      const bookId = req.params.id
      
      const userId = req.session.currentUser._id
     
      User.findByIdAndUpdate({_id: userId}, {$push:  {readList: bookId }} , {new: true} )
      .then((user) => {
          res.status(200).json({user})
      })
      .catch((err)=> next(createError(err))) 
  })

  // ADDS BOOK TO FAVORITES
  router.post("/favorites/:id", isLoggedIn, (req, res, next) => {
    const bookId = req.params.id
    console.log("bookId", bookId)
    const userId = req.session.currentUser._id
    console.log("userId", userId)
    User.findByIdAndUpdate({_id: userId}, {$push:  {favoriteBooks: bookId }} , {new: true} )
    .then((user) => {
        res.status(200).json({user})
    })
    .catch((err)=> next(createError(err))) 
})

// DELETES A BOOK
router.delete("/:bookId", isLoggedIn, (req, res, next) => {
    const {bookId} = req.params
    console.log("bookId",bookId)
    Book.findByIdAndDelete(bookId)
    .then((deletedBook) => {
        res.status(200).send()
    })
    .catch((err) => next(createError(err)))
})

// UPDATES A BOOKS INFORMATION AND COVER IMAGE
router.put("/:id", isLoggedIn, (req, res, next) => {
    const {id} = req.params
    const {title, description, genre, coverImage} = req.body
    Book.findByIdAndUpdate(id, {title, description, genre, coverImage} ,{new: true} )
    .then((updatedBook) => {
        res.status(200).json({updatedBook})
    })
    .catch((err) => next(createError(err)))
})

module.exports = router