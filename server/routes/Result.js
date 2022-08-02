const router = require('express').Router();
const { Result } = require('../models/results');
const {User} = require('../models/user')

// ! Create Result 

router.post('/' , async (req, res) => {

 const newPost = new Result({
    user_id: req.body.user_id,
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
    let userId = User.findById({_id: req.params.id})
      let result = await Result.find({user_id: userId});

      if (result) {
        res.status(200).json(result)
      } else {
        res.status(400).send({
          message: 'No Result'
        })
      }

  } catch (error) {
      res.status(500).json(error)
  }
});

// ! Get timeline results

module.exports = router;
