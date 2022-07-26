const router = require('express').Router();
const { Recording } = require('../models/recording');


// ! Create Recording Number and sorting 

router.post('/', async (req, res) => {
    try {
        const newRecording = new Recording({
            record: req.body.record
        })

        if (newRecording.$isEmpty) {
            res.status(500).send({message: 'Record not found'})
        }

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
                                        .find({}, {record: req.body.record})
                                        .sort({record: -1});

        if (SortingOfRecords.length === 0 ) {
            res.status(500).send({message: 'Record not found thats empty'});
        }                                

        
        const giveOneData = await SortingOfRecords.findOne({
            record: req.body.record
        })[0];

        res.status(200).json(giveOneData);
    } catch (error) {
        res.status(500).json(error)
    }
});

module.exports = router