const question = require("../models/question");

exports.getQuestions = (req, res) => {
  question
    .find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};
