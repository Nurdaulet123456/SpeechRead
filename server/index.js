require('dotenv').config();
const express = require('express');
const cors = require('cors');
// import mongoose from 'mongoose';
const con = require('./db')
const userRouter = require('./routes/users')
const authRouter = require('./routes/auth')
const Result = require('./routes/Result')
const keyWords = require('./routes/keyWords')
const recording = require('./routes/recording');
const editUser = require('./routes/updateProfile')

const app = express();

app.use(express.json({extended: true}));
app.use(cors());

// DataBase
con()

// Routers
app.use('/api/users', userRouter)
app.use('/api/auth', authRouter)
app.use('/api/result', Result);
app.use('/api/keywords', keyWords);
app.use('/api/records', recording);
app.use('/api/edit', editUser)

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Listening on ${port}`));
