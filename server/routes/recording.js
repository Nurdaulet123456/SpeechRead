const router = require('express').Router();
const { Recording } = require('../models/recording');


// ! Create Recording Number and sorting 

router.post('/', async (req, res) => {
    try {
        const newRecording = new Recording({
            user_id: req.body.user_id,
            record: req.body.record
        })
        const saveRecording = await newRecording.save();
        res.status(200).json(saveRecording);

    } catch (error) {
        res.status(500).send({message: 'Invalid request error'});
    }
});

// ! Get maximum number of records

router.get('/', async (req, res) => {
    try {
        const SortingOfRecords = await Recording
                                        .find().sort({record: -1})                               

        res.status(200).json(SortingOfRecords);
    } catch (error) {
        res.status(500).json(error)
    }
});

module.exports = router