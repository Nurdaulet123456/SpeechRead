const router = require('express').Router();
const multer = require('multer');
const {User} = require('../models/user')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../public/uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now()+file.originalname)
    }
  });

  const fileFilter=(req, file, cb)=>{
   if(file.mimetype ==='image/jpeg' || file.mimetype ==='image/jpg' || file.mimetype ==='image/png'){
       cb(null,true);
   }else{
       cb(null, false);
   }

  }

var upload = multer({ 
    storage:storage,
    limits:{
        fileSize: 1024 * 1024 * 5
    },
    fileFilter:fileFilter
 });

router.put('/', upload.single('avatar'), (req, res) => {
    let id = req.body._id
    let profileAvatar = req.file.path
    User.findById(id, (err, data) => {
        data.avatar = profileAvatar ? profileAvatar : data.avatar;

        data.save()
        .then(docs => {
            res.status(201).json({
                message: 'Uploaded avatar was successfully and successfully uploaded',
                results: docs
            })
        }).catch(err => {
            console.log(err);
        })
    })
})


module.exports = router