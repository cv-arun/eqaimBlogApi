const mongoose = require('mongoose')


const blogSchema = new mongoose.Schema({
    user: String,
    title: String,
    content: String,

}, {
    timestamps: true
})

module.exports=mongoose.model('Blog',blogSchema)