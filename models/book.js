const mongoose = require("mongoose")
const bookSchema = mongoose.Schema({
book_title: String,
book_author: { type : String, minlength : 2, maxlength : 35 },
book_price: { type : Number, min : 1, max : 20 }
})
module.exports = mongoose.model("book",
bookSchema)