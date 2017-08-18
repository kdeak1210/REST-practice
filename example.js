const express = require('express');

// Set up express app !
const app = express();

// App is listening for a GET request on root level, will respond in the callback
app.get('/', function(req, res){  // Visit localhost:4000 to send this GET request
  console.log('GET request');
  res.send({name: 'Yoshi'});
  // res.end();  // ends the response so client does not keep waiting indefintely
});

// Listen for requests. Use port 4000 unless there exists a preconfigured port
app.listen(process.env.port || 4000, function(){
  console.log('now listening for requests');
});
