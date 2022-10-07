//Schema
const mongoose = require('mongoose');

const CardSchema = new mongoose.Schema({
    title: String,
    skill: String,
    codesnippet: String
})

//Model
module.exports = mongoose.model('Cards', CardSchema)