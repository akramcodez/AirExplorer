const Joi = require('joi');

const listingSchema = Joi.object({
  listing: Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().min(0).required(),
    country: Joi.string().required(),
    location: Joi.string().required(),
    image: Joi.object({
      filename: Joi.string().optional(),
      url: Joi.string().required(),
    }).optional(),
    filters: Joi.string()
      .valid(
        'trending',
        'rooms',
        'iconic_cities',
        'mountains',
        'castles',
        'swimming_pool',
        'camping',
        'farms',
        'arctic',
        'domes',
        'beach',
        'boats',
        'all',
      )
      .required(),
  }).required(),
});

const reviewSchema = Joi.object({
  review: Joi.object({
    rating: Joi.number().required().min(1).max(5),
    comment: Joi.string().required(),
  }).required(),
});

module.exports = { listingSchema, reviewSchema };
