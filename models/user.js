const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passposrtLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
});

userSchema.plugin(passposrtLocalMongoose);

module.exports = mongoose.model('User', userSchema);

