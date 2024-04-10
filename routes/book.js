var express = require('express');
const book_controllers= require('../controllers/book');
var router = express.Router();
/* GET costumes */
router.get('/', book_controllers.book_view_all_Page );
router.get('/book/', book_controllers.book_detail)
module.exports = router;
