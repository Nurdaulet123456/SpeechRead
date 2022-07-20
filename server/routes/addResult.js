const router = require('express').Router();
const { Result } = require('../models/results');

router.post('/' , async (req, res) => {

 const newPost = new Result({
    words: req.body.words,
    page: req.body.page,
    racer: req.body.racer,
    date: req.body.date
 });
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
})

module.exports = router;
