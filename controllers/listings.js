const Listing = require('../models/listing');

module.exports.index = async (req, res) => {
  const allListings = await Listing.find({});
  res.render('listings/index.ejs', { allListings });
};

module.exports.renderNewForm = (req, res) => {
  res.render('listings/new.ejs');
};

module.exports.showListing = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id)
    .populate({
      path: 'reviews',
      populate: { path: 'author' },
    })
    .populate('owner');
  if (!listing) {
    req.flash('error', 'Listing does not exist');
    res.redirect('/listings');
  }
  res.render('listings/show.ejs', { listing });
};

module.exports.createListing = async (req, res, next) => {
  let url = req.file.path;
  let filename = req.file.filename;

  const newListing = new Listing(req.body.listing);
  newListing.owner = req.user._id;
  newListing.image = { url, filename };
  await newListing.save();
  req.flash('success', 'Listing created');
  res.redirect('/listings');
};

module.exports.editForm = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash('error', 'Listing does not exist');
    res.redirect('/listings');
  }

  let originalImgUrl = listing.image.url;
  originalImgUrl = originalImgUrl.replace(
    '/upload',
    '/upload/c_thumb,g_face,h_200,w_200/r_max/f_auto',
  );
  res.render('listings/edit.ejs', { listing, originalImgUrl });
};

module.exports.updateListing = async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });

  if (typeof req.file !== 'undefined') {
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = { url, filename };
    await listing.save();
  }
  req.flash('success', 'Listing updated');
  res.redirect(`/listings/${id}`);
};

module.exports.destroyListing = async (req, res) => {
  let { id } = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  console.log(deletedListing);
  req.flash('success', 'Listing deleted');
  res.redirect('/listings');
};


module.exports.filter = async (req, res) => {
  const filter = req.params.filter || 'all';
  let query = {};
  if (filter !== 'all') {
    query.filters = { $in: [filter] };
  }

  const allListings = await Listing.find(query);
  res.render('listings/index.ejs', { allListings, currentFilter: filter });
};

module.exports.search = {
};