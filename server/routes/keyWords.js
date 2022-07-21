const router = require('express').Router();
const { Key } = require('../models/keywords');
// Create Key Words

router.post('/', async (req, res) => {
    try {
        const newKeyWords = new Key({
            keyWords: req.body.keyWords,
            data: req.body.data,
        })
        const saveKeywords = await newKeyWords.save()
        res.status(200).json(saveKeywords)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
});


module.exports = router;