const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema

const questionSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    "description": {
        type: String,
        required: true
    },
    "level": {
        type: String,
        required: true
    },
    "tags": {
        type: [String]
    },
    "companies": {
        type: [String],
    },
    "topic": {
        type: [String],
    },
    "hints": {
        type: [JSON],
    },
    "similarQuestions": {
        type: [Schema.ObjectId],
    },
    "attempts": {
        type: Number,
    },
    "successSolved": {
        type: Number,
    },
    "subTitle": {
        type: String
    }
})

module.exports = mongoose.model("question", questionSchema)