const mongoose = require('mongoose');
require('dotenv').config();

const MONGO_URI = process.env.MONGO_URI;

console.log('mon',MONGO_URI)

const connectDatabase = () => {
  
    mongoose.connect('mongodb://localhost:27017/cloth_shop', { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log("Mongoose Connected");
        })
        .catch((err) => {
            console.error('Error connecting to MongoDB:', err);
        });
}


module.exports = connectDatabase;