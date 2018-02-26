const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RestaurantSchema = Schema({
  id: String,
  name: String,
  type: String
});

const Restaurant = mongoose.model('Restaurant', RestaurantSchema);

module.exports = Restaurant;
