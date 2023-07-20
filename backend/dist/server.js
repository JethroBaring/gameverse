"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
app.use(cors());
app.listen(() => {
    console.log(`Listening on ${process.env.PORT}`);
});
