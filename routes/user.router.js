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
      const {firstname, lastname, email, password, profileImage} = req.body      // should this be a $set, is thats why GET user is not working?
      .then((updatedUser) => {
        res.status(200).json({updatedUser})
      })
      .catch((err) => next(createError(err)))
  })

  router.get("/:id", isLoggedIn, (req, res, next) => {
    console.log("user.router")
      const {id} = req.params
      User.findById(id)
      .then((foundUser) => {
        console.log("foundUser",foundUser)
          res.status(200).json(foundUser)
      })
      .catch((err) => next(createError(err)))
  })

module.exports = router