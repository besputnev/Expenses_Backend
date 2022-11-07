const mongoose = require("mongoose");

const { Schema } = mongoose;

const expenses = new Schema({
    shop: String,
    summ: String,
    date: String
})

module.exports = mongoose.model('expenses', expenses)