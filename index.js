const express = require('express');
const routes = require('./routes/api'); // OR throw only the require into app.use()

// set up express app
const app = express();

// (middleware) Initialize the routes -
app.use('/api', routes);

app.listen(process.env.port || 4000, function() {
  console.log('now listening for some requests');
});
