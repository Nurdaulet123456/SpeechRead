const router = require('express').Router();
const { Result } = require('../models/results');

router.get('/', async (req, res) => {
    try {
        let result = await Result.find();

        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error)
    }
});


module.exports = router;