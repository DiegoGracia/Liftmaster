const express = require('express');
const router = express.Router();
const passport = require('passport');
const permissions = require('../utils/permissions');
const user = require('../controllers/user.controller');

router.post('/register', passport.authenticate('signup', {session: false}), user.signup);
router.post('/login', passport.authenticate('login'), user.login);
router.get('/all', user.getAllUsers);
router.get('/one/:id', user.getOneUser);
router.post('/forgot', user.updatePassword);
router.get('/verify', permissions.isLoggedIn, user.verify);
router.get('/logout', user.logout);
router.put('/update/:id', user.editUser);
router.put('/updatePass/:id', user.updatePasswordWithID);
router.delete('/delete/:id', permissions.isLoggedIn, user.deleteUser);

module.exports = router;