const mongoose = require("mongoose")
const bookSchema = mongoose.Schema({
book_title: String,
book_author: String,
book_price: Number
})
module.exports = mongoose.model("book",
bookSchema)