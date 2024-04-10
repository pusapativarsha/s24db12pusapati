var book = require('../models/book');
// List of all book
exports.book_list = function(req, res) {
 res.send('NOT IMPLEMENTED: book list');
};
// for a specific book.
exports.book_detail = async function(req, res) {
console.log("detail" + req.params.id)
try {
result = await book.findById( req.params.id)
res.send(result)
} catch (error) {
res.status(500)
res.send(`{"error": document for id ${req.params.id} not found`);
}
};

// Handle book create on POST.
exports.book_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: book create POST');
};
// Handle book delete from on DELETE.
exports.book_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: book delete DELETE ' + req.params.id);
};
// Handle book update form on PUT.
exports.book_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await book.findById( req.params.id)
// Do updates of properties
if(req.body.book_title)
toUpdate.book_title = req.body.book_title;
if(req.body.book_author) toUpdate.book_author = req.body.book_author;
if(req.body.book_price) toUpdate.book_price = req.body.book_price;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
};


exports.book_list = async function(req, res) {
    try{
    thebook = await book.find();
    res.send(thebook);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
 
 
exports.book_view_all_Page = async function(req, res) {
    try{
    thebooks = await book.find();
    res.render('book', { title: 'book Search Results', results: thebooks });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };


    // Handle book create on POST.
exports.book_create_post = async function(req, res) {
    console.log(req.body)
    let document = new book();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    document.book_type = req.body.book_type;
    document.book_size = req.body.book_size;
    document.book_price = req.body.book_price;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    
