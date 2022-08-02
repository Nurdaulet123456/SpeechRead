const router = require('express').Router();
const {User} = require('../models/user')

router.get('/', async (req, res) => {
    try {
        const userData = await User.findById({_id: req.query.id})
        console.log(userData);
    res.status(200).json(userData)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.post('/', async (req,res) => {
    try {
      const userData = await User.findByIdAndUpdate({_id: req.body._id}, {
            $set: {
                name: req.body.name,
                username: req.body.username,
                email: req.body.email,
            }
        })

        res.status(200).json(userData)
    } catch (error) {
        res.status(500).json(error)
        console.log(error)
    }
})

module.exports = router