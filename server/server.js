require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.set('json spaces', 2);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const apiRoute = require('./routes/api');

app.use('/api', apiRoute);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

