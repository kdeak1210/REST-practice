const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const routes = require('./routes/api'); // OR throw only the require into app.use()

// set up express app
const app = express();

// Connect to mongodb 'open a connection stream' (mongo/localhost/dbname)
mongoose.connect('mongodb://localhost/ninjago');
mongoose.Promise = global.Promise;  // overriding the deprecated mongoose promise

// (middleware) Lets the application serve static pages (folder name = 'public')
app.use(express.static('public'));

// (middleware) now we always parse the body of incoming requests (check notes.md)
app.use(bodyParser.json());

// (middleware) Initialize the routes -
app.use('/api', routes);

// (middleware) Error Handling after processing requests (check notes.md)
app.use(function(err, req, res, next){
  // console.log(err);
  res.status(422).send({error: err._message});
});

// listen for requests on precofigured port if exists, OR port 4000
app.listen(process.env.port || 4000, function() {
  console.log('now listening for some requests');
});
