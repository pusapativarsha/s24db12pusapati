var express = require('express');
const book_controlers= require('../controllers/book');
var router = express.Router();
/* GET book */
router.get('/',book_controlers.book_view_all_Page );
 
/* GET detail book page */
router.get('/detail', book_controlers.book_view_one_Page);
 
/* GET create book page */
router.get('/create', book_controlers.book_create_Page);
 
/* GET create update page */
router.get('/update', book_controlers.book_update_Page);

/* GET delete costume page */
router.get('/delete', book_controlers.book_delete_Page);


module.exports = router;