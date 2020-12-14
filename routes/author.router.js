const express = require("express")
const router = express.Router()
const createError = require("http-errors")
const User = require("./../models/user.model")

const {
    isLoggedIn,
    isNotLoggedIn,
    validationLogin
  } = require("../helpers/middlewares");

router.get("/:id" , isLoggedIn, (req, res, next) => {
    const authorId = req.params.id
   User.findById(authorId)
   .populate("ownBooks")
   .then((user) => {
       res.status(200).json({user})
   })
   .catch((err)=>next(createError(err)))
})

module.exports = router