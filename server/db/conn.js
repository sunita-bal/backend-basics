const mongoose = require('mongoose');

const DB = process.env.DATABASE;

mongoose.connect(DB)
.then(() => {
    console.log("Chipak gye hum ")
})
.catch((err) => {
    console.log("no connection")
})