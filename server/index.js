import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import bodyParser from 'body-parser';

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const saltRounds = 10;

mongoose.connect('mongodb://localhost:27017/autorization', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, () =>{
    console.log('DB connected');
})

const userShema = new mongoose.Schema({
    name: String,
    username: String,
    email: String,
    password: String,
})

const User = new mongoose.model('User', userShema)

app.get('/', (req, res) => {
    res.send('My App')
})

app.post('/login', (req, res) => {
    const {email, password} = req.body
       
    
     User.findOne({ email: email}, (err, user) => {
            if (user) {
                if (password === user.password) {
                    res.send({message: 'Login successful', user: user})
                } else {
                    res.send({message: 'Login failed'})
                }
            } else {
                res.send({message: 'User not registered'})
            }
        })
    
})

app.post('/register',  (req, res) => {
    const {name, username, email, password} = req.body
     User.findOne({ email: req.body.email }, (err, user) => {
    
        if (user) {
            res.send({message: 'User already registered'})
        } else {
            const user = new User({
                name,
                username,
                email,
                password
            })
        
            user.save( err => {
                if (err) {
                    res.send(err)
                } else {
                    res.send({ message: 'Successfully registered' })
                }
            })
        }
    })


})

app.listen(3001, () => {
    console.log('Be Started in 3001 ports')
})