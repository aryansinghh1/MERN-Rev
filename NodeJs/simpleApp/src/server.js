// const express = require('express');
// import path from 'path';
// import { fileURLToPath } from "url";

// const fs = require('fs/promises');
// require('dotenv').config();
// const path = require('path');

import express from "express";
import "dotenv/config";
import authRoutes from './routes/authRoutes.js';
import courseRoutes from './routes/courseRoutes.js';
import { connectDB } from "./config/db.js";

const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());

connectDB();

app.use('/auth', authRoutes);
app.use('/course', courseRoutes);

// const __filename = fileURLToPath(import.meta.url);
// const __dirname =  path.dirname(__filename);

// export const coursePath = path.join(__dirname, '../data/courses.json');
// export const userPath = path.join(__dirname, '../data/users.json');


// console.log('directory path',__dirname);
// console.log('file path',__filename);

// app.get('/',(req, res) => {
//     res.json({ message: 'Hello' });
//     return;
// })




// app.get('my-courses', (req, res) => {
//     // complete this
// })


app.listen(port, () => {
    console.log(`App is running on port ${port}`)
})