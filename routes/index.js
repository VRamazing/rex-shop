var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("<h1>Index</h1>");
});

/* GET home page. */
router.get('/customers', function(req, res, next) {
  const customers = [
    {id: 1, firstName: 'John', lastName: 'Doe'},
    {id: 2, firstName: 'Steve', lastName: 'Smith'},
    {id: 3, firstName: 'Mary', lastName: 'Swanson'}
  ]
  res.json(customers);
});

module.exports = router;
