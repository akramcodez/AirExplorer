const User = require('../models/user.js');

module.exports.signUpForm = (req, res) => {
  res.render('users/signup.ejs');
};

module.exports.signUp = async (req, res, next) => {
  try {
    let { username, email, password } = req.body;
    const newUser = new User({ username, email });
    const registeredUser = await User.register(newUser, password);
    console.log(registeredUser);
    req.login(registeredUser, (err) => {
      let username = req.user.username;
      if (err) {
        return next();
      }
      req.flash('success', `Welcome ${username} to Airbnb`);
      res.redirect('/listings');
    });
  } catch (err) {
    let errMsg = err.message;
    req.flash('error', errMsg);
    res.redirect('/signup');
  }
};

module.exports.logInForm = (req, res) => {
  res.render('users/login.ejs');
};

module.exports.logIn = async (req, res) => {
  let { username } = req.body;
  req.flash('success', `Welcome ${username} to Airbnb`);
  let redirectUrl = res.locals.redirectUrl || '/listings';
  res.redirect(redirectUrl);
};

module.exports.logOut = (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next();
    }
    req.flash('success', 'You are logged out now');
    res.redirect('/listings');
  });
};
