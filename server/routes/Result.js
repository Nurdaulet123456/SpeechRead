const router = require('express').Router();
const { Result } = require('../models/results');

// ! Create Result 

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

// ! Get all Results 

router.get('/', async (req, res) => {
  try {
      let result = await Result.find();

      res.status(200).json(result)
  } catch (error) {
      res.status(500).json(error)
  }
});

// ! Get timeline results

module.exports = router;
