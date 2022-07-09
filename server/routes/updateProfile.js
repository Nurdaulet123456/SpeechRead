const router = require('express').Router();
const {User} = require('../models/user')


router.post('/', async (req, res) => {
    let user = await User.findOne({id: req.body._id});

    if (user) {
        user.name = req.body.name || user.name
        user.username = req.body.username || user.username
        user.email = req.body.email || user.email
        const updateUser = await user.save()
    
        res.json({
            _id: updateUser._id,
            name: updateUser.name,
            username: updateUser.username,
            email: updateUser.email,
        })

        res.send({message: 'User updated successfully'})
    } else {
        res.status(404).send({message: 'User not found'})
    }

});

module.exports = router;