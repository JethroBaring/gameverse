import { Request, Response } from 'express';
const express = require('express');
const cors = require('cors')
const app = express();
require('dotenv').config()


app.use(cors())

app.listen(() => {
    console.log(`Listening on ${process.env.PORT}`)
})
 
