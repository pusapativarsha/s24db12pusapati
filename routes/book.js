const express = require('express');
const passport = require('passport'); // Import passport
const book_controlers = require('../controllers/book');
const router = express.Router();

// A middleware function to check if we have an authorized user and continue on
// or redirect to login.
const secured = (req, res, next) => {
    if (req.user) {
        return next();
    }
    res.redirect("/login");
}

/* GET update book page */
router.get('/update', secured, book_controlers.book_update_Page);

/* POST login */
router.post('/login', passport.authenticate('local'), (req, res) => {
    res.redirect('/');
});

/* GET book */
router.get('/', book_controlers.book_view_all_Page);

/* GET detail book page */
router.get('/detail', book_controlers.book_view_one_Page);

/* GET create book page */
router.get('/create', secured, book_controlers.book_create_Page);

/* GET delete book page */
router.get('/delete', secured, book_controlers.book_delete_Page);

module.exports = router;
