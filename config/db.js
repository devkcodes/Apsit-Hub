const mongoose = require('mongoose');

const config = require('config');

const db = config.get("mongoURI");

const connectDB = async() => {
    try {
        await mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false }); //wait for database to connect

        console.log('MongoDB Connected!!');
    } catch (err) { //else throw error
        console.error(err.message);
        process.exit(1); //exit if connection error
    }
}

module.exports = connectDB;