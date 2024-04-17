const express = require('express');
const passport = require('passport');
const router = express.Router();
const Account = require('../models/account');

router.get('/', (req, res) => {
    res.render('index', { title: 'book App', user: req.user });
});

router.get('/register', (req, res) => {
    res.render('register', { title: 'book App Registration' });
});

router.post('/register', (req, res) => {
    Account.findOne({ username: req.body.username })
        .then((user) => {
            if (user !== null) {
                console.log("exists " + req.body.username);
                return res.render('register', { title: 'Registration', message: 'Existing User', account: req.body.username });
            }
            const newAccount = new Account({ username: req.body.username });
            Account.register(newAccount, req.body.password, (err, user) => {
                if (err) {
                    console.log("db creation issue " + err);
                    return res.render('register', { title: 'Registration', message: 'access error', account: req.body.username });
                }
                if (!user) {
                    return res.render('register', { title: 'Registration', message: 'access error', account: req.body.username });
                }
            });
            console.log('Success, redirect');
            res.redirect('/');
        })
        .catch((err) => {
            return res.render('register', { title: 'Registration', message: 'Registration error', account: req.body.username });
        });
});

router.get('/login', (req, res) => {
    res.render('login', { title: 'book App Login', user: req.user });
});

router.post('/login', passport.authenticate('local'), (req, res) => {
    res.redirect('/');
});

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

router.get('/ping', (req, res) => {
    res.status(200).send("pong!");
});

module.exports = router;
