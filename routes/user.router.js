const express = require("express")
const router = express.Router()
const createError = require("http-errors")
const User = require("../models/user.model")

const {
    isLoggedIn,
    isNotLoggedIn,
    validationLogin
  } = require("../helpers/middlewares");

  router.put("/:id", isLoggedIn ,(req, res, next) => {
      const {id} = req.params
      const {firstname, lastname, email, password, profileImage} = req.body
      User.findByIdAndUpdate(id, {firstname, lastname, email, password, profileImage}, {new: true})
      .then((updatedUser) => {
        res.status(200).json({updatedUser})
      })
      .catch((err) => next(createError(err)))
  })

module.exports = router