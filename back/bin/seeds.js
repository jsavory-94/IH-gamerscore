const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/restaurants-bk');

const Restaurant = require('../models/restaurant');

const restaurant = [{
  id: '1',
  name: 'A bar',
  type: 'Bar'
},
{id: '2',
  name: 'Another restaurant',
  type: 'Bar and cousine'
},
{
  id: '3',
  name: 'A restaurant',
  type: 'Bar'
},
{id: '4',
  name: 'Another bar restaurant',
  type: 'Bar and cousine'
},
{
  id: '5',
  name: 'A place to eat',
  type: 'Bar'
},
{id: '6',
  name: 'Another place to eat',
  type: 'Bar and cousine'
},
{
  id: '7',
  name: 'A restaurante',
  type: 'Bar'
},
{id: '8',
  name: 'Another restaurante',
  type: 'Bar and cousine'
}];

Restaurant.create(restaurant, (err, docs) => {
  if (err) {
    throw err;
  }

  docs.forEach((restaurant) => {
    console.log(restaurant.name);
  });
  mongoose.connection.close();
});
