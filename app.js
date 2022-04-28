require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieparser = require('cookie-parser');

const PORT = process.env.PORT || 4000;

const app = express();

app.use(express.json());
app.use(cors);
app.use(cookieparser);

const start = async () => {
    try {
        app.listen(PORT, () => console.log(`Server has been started on ${PORT} port...`))
    } catch (e) {
        console.log(e);
    }
};

start();


