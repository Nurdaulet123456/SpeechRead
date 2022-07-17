const router = require('express').Router();
const { Result } = require('../models/results');

router.post('/' , async (req, res) => {
 let addResult = await Result(req.body)

 await new Result({...addResult}).save();

 res.status(200).send({message: 'Result saved successfully'})
})

module.exports = router;
