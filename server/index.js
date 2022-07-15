require('dotenv').config();
const express = require('express');
const cors = require('cors');
// import mongoose from 'mongoose';
const con = require('./db')
const userRouter = require('./routes/users')
const authRouter = require('./routes/auth')
const updateProfile = require('./routes/updateProfile')

const app = express();

app.use(express.json());
app.use(cors());

// DataBase
con()

// Routers
app.use('/api/users', userRouter)
app.use('/api/auth', authRouter)
app.use('/api/updateProfile', updateProfile);

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Listening on ${port}`));
