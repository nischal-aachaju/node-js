const mongooes = require("mongoose");
require("dotenv").config();


async function connectDB() {
    await mongooes.connect(process.env.DBA_NISCHAL)
    console.log("database connected");

}

module.exports = connectDB;