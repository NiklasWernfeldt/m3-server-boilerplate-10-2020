const express = require("express")
const router = express.Router()
const createError = require("http-errors")
const User = require("./../models/user.model")

const {
    isLoggedIn,
    isNotLoggedIn,
    validationLogin
  } = require("../helpers/middlewares");

  router.get("/", isLoggedIn, (req, res, next) => {
      const userId = req.session.currentUser._id
      User.findById(userId)
      .populate("ownBooks")
      .populate("favoriteBooks")
      .populate("readList")
      .populate("nowReading")
      .then((foundUser) => {
          console.log(foundUser)
          res.status(200).json({ownBooks: foundUser.ownBooks, favoriteBooks: foundUser.favoriteBooks, readlist: foundUser.readList, nowReading: foundUser.nowReading})
      })
      .catch((err) => next(createError(err)))
  })

  module.exports = router