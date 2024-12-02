const express = require('express');
const router = express.Router();
const wrapAsync = require('../utils/wrapAsync.js');
const { isLoggedIn, isOwner, validateListing } = require('../middleware.js');
const listingController = require('../controllers/listings.js');
const multer = require('multer');
const { storage } = require('../cloudConfig.js');
const upload = multer({ storage });
const Listing = require('../models/listing'); 

router
  .route('/')
  .get(wrapAsync(listingController.index))
  .post(
    isLoggedIn,
    upload.single('listing[image]'),
    validateListing,
    wrapAsync(listingController.createListing),
  );

// new route
router.get('/new', isLoggedIn, listingController.renderNewForm);

router
  .route('/:id')
  .get(wrapAsync(listingController.showListing))
  .put(
    isLoggedIn,
    isOwner,
    upload.single('listing[image]'),
    validateListing,
    wrapAsync(listingController.updateListing),
  )
  .delete(isLoggedIn, isOwner, wrapAsync(listingController.destroyListing));

// Edit route
router.get(
  '/:id/edit',
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.editForm),
);

router.get('/', async (req, res) => {
  const { query } = req.query; 
  console.log('Search query:', query);

  if (query) {
    res.send(`You searched for: ${query}`);
  } else {
    res.send('No search query provided.');
  }
});

//Filters
router.get('/filter/:filter', wrapAsync(listingController.filter));

module.exports = router;
