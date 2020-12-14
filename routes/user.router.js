const express = require("express")
const router = express.Router()
const createError = require("http-errors")
const User = require("../models/user.model")

const {
    isLoggedIn,
    isNotLoggedIn,
    validationLogin
  } = require("../helpers/middlewares");

  router.put("/:id", (req, res, next) => {
      const {id} = req.params
      User.findByIdAndUpdate(id, {})
      .then((user) => {

      })
  })

module.exports = router