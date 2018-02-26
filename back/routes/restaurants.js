var express = require('express');
var router = express.Router();

const Restaurant = require('../models/restaurant');

router.get('/', (req, res, next) => {
  Restaurant.find({})
    .then((results) => res.json(results))
    .catch(next);
});

module.exports = router;
