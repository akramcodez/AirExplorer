const mongoose = require('mongoose');
const initData = require('./data.js');
const Listing = require('../models/listing.js');

const mongoUrl = 'mongodb://127.0.0.1:27017/airbnb';

main()
  .then((res) => {
    console.log('Connected to DB');
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(mongoUrl);
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: '67417410cbdc408ff2f66fca',
  }));
  await Listing.insertMany(initData.data);
  console.log('Data was initialized');
};

initDB();
