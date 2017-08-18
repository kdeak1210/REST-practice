// Here we will create all of our routes for the API. If we had other sections
// of the site, we could create routes for those in separate files Here

const express = require('express');

// Bring in the express Router object
const router = express.Router();
const Ninja = require('../models/ninja');

// get a list of ninjas from the db
router.get('/ninjas', function(req, res){
  res.send({type: 'GET'});
});

// add a new ninja to the db
router.post('/ninjas', function(req, res){
  // Creates a new instance of a Ninja object locally, and saves it to db
  Ninja.create(req.body).then(function(ninja){  // Promise ONLY fires once action completed
    res.send(ninja);    // Send the JSON back to client so they know it worked
  });
});

// update a ninja in the db (:id is a parameter - like a variable)
router.put('/ninjas/:id', function(req, res){
  res.send({type: 'PUT'});
});

// delete a ninja from the db (:id is a parameter - like a variable)
router.delete('/ninjas/:id', function(req, res){
  res.send({type: 'DELETE'});
});

// Export the routes, so that we can import them elsewhere
module.exports = router;
