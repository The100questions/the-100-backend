const express = require("express")
const { getQuestions } = require("../controller/dsa")

const router = express.Router()

router.get("/questions", getQuestions)

module.exports = router