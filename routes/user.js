const express = require('express');
const router = express.Router();
const User = require('../models/user.js');
const wrapAsync = require('../utils/wrapAsync.js');
const passport = require('passport');
const { saveRedirectUrl } = require('../middleware.js');

const signInController = require('../controllers/users.js');

router
  .route('/signup')
  .get(signInController.signUpForm)
  .post(wrapAsync(signInController.signUp));

router
  .route('/login')
  .get(signInController.logInForm)
  .post(
    saveRedirectUrl,
    passport.authenticate('local', {
      failureRedirect: '/login',
      failureFlash: true,
    }),
    wrapAsync(signInController.logIn),
  );

router.get('/logout', signInController.logOut);

module.exports = router;
