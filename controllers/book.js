var book = require('../models/book');
// List of all book
exports.book_list = function(req, res) {
 res.send('NOT IMPLEMENTED: book list');
};
// for a specific book.
exports.book_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: book detail: ' + req.params.id);
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
exports.book_update_put = function(req, res) {
    res.send('NOT IMPLEMENTED: book update PUT' + req.params.id);
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
    // {"book_type":"goat", "cost":12, "size":"large"}
    document.book_title = req.body.book_title;
    document.book_author = req.body.book_author;
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
   
   // Handle book create on POST.
exports.book_create_post = async function(req, res) {
    console.log(req.body)
    let document = new book();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"book_type":"goat", "cost":12, "size":"large"}
    document.book_title = req.body.book_title;
    document.book_author = req.body.book_author;
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
    
 