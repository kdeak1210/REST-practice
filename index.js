const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/api'); // OR throw only the require into app.use()

// set up express app
const app = express();

// (middleware) now we always parse the body of incoming requests (check notes.md)
app.use(bodyParser.json());

// (middleware) Initialize the routes -
app.use('/api', routes);

app.listen(process.env.port || 4000, function() {
  console.log('now listening for some requests');
});
