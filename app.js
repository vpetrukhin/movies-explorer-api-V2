require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieparser = require('cookie-parser');
const usersRouter = require("./routes/Users.router");

const PORT = process.env.PORT || 4000;

const app = express();

app.use(express.json());
app.use(cors);
app.use(cookieparser);

app.use('/users', usersRouter);

const start = async () => {
    try {
        await mongoose.connect(process.env.URL_DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }, () => console.log('Connect to database.'));
        app.listen(PORT, () => console.log(`Server has been started on ${PORT} port...`))
    } catch (e) {
        console.log(e);
    }
};

start();


