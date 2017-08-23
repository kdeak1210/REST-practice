# What is a REST API?

## Notes for my reference

### API:
- Application Programming Interface

- application human interface: application = TV, interface = remote
- application programming interface: application = YouTube, interface = endpoints

#### Popular APIs:
- YouTube, Google Maps, Twitter, Uber.
- Expose from their codebase the API so that we can write code to interact with their application and use that functionality into our app. Ex. Uber API may expose a list of drivers in a current location.

### REST:
- REpresentational State Transfer

- Architectural style of the web
- A standard / set of guidelines by which we can structure & create API's
- REST API's have identifiable properties...

### REST Properties

#### They Make use of Resource-based URL's

Webpage - http://www.football.com/scores

Webpage - http://www.football.com/teams/arsenal

JSON - http://www.football.com/api/scores

JSON - http://www.football.com/api/teams/arsenal

#### They Make use of HTTP Methods
A way of telling the server what type of request we are making...

- GET - Used to retrieve data from the server
- POST - Used to send data to the server
- PUT - Used to update data
- DELETE - Used to delete data

#### They Make use of HTTP Status Codes
Examples:

- 200 means OK
- 404 means resource not found
- 500 means server error

#### CRUD

Create, Read, Update & Delete functionality aligns with the HTTP methods

- Create something new = POST request
- Read or retrieve = GET request
- Update or edit = PUT request
- Delete from the db = DELETE request

## MongoDB

#### Models

- Models represent collections in MongoDB
- User Model to represent a collection of Users
- Ninja Model to represent a collection of Ninjas
- Collection: A series of data, represents a single model. Like a SQL table
- Models work hand in hand with Schemas...

#### Schema

- Schemas define the structure of our data objects
- As we open up one of our objects, the schema governs what is inside of it

```
{
  name: String,
  rank: String,
  available: Boolean
}
```

#### Mongoose

- Mongoose provides mongodb object modeling for node.js.
- It is a high-level ORM that includes type casting, validation, query building etc
  * As such, it can be viewed also as an error handling middleware
- Adds a layer of methods to easily save, edit, retrieve, delete data from mongodb
- Allows us to create our Models and Schemas easily

```
$ npm install mongoose --save
```

###### Put Request

When updating the ninjas with a put request through mongoose, we need to fire another
promise and re-find the same ninja to send it in the response. If we instead send the
ninja after the first promise, it will be the old ninja. (although it WAS updated in DB)

```
router.put('/ninjas/:id', function(req, res, next){
  Ninja.findByIdAndUpdate({_id: req.params.id}, req.body)
  .then(function(){
    Ninja.findOne({_id: req.params.id})
    .then(function(ninja){
      res.send(ninja);
    });
  });
});
```

###### GeoJSON  http://geojson.org/

"GeoJSON is a format for encoding a variety of geographic data structures."
```
{
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [125.6, 10.1]
  },
  "properties": {
    "name": "Dinagat Islands"
  }
}
```
"GeoJSON supports the following geometry types: Point, LineString, Polygon, MultiPoint, MultiLineString, and MultiPolygon. Geometric objects with additional properties are Feature objects. Sets of features are contained by FeatureCollection objects."

###### geoNear

mongoose function that performs a query based on distance for GeoJSON objects

## Express

#### Next

Middleware functions can have up to 4 parameters - function(err, req, res, next)
With all 4 parameters, we can use next to do error handling. When next is called,
the next piece of middleware will run. Anything we pass to next can be propagated
down to use in error processing for the next middleware:

```
function (err, req, res, next) {}

next({ type: 'database', error: 'datacenter blew up' });

function (err, req, res, next) {
   if (err.type === 'database') {
     res.send('Something went wrong user');
     console.log(err.error);
   }
};
```

#### Promise

Similar to callbacks and can result in cleaner code in many error handling situations.
Chain .then(...), to make a promise to do something first THEN perform next actions

## URL params

- Can add on parameters in request URL's

http://localhost:4000/api/ninjas`?lon=50.45&lat=42.35`

- Can access the URL parameters in request object like so:

```
router.get('/ninjas', function(req, res, next){
  Ninja.geoNear({
    type: 'Point',
    coordinates: [
      parseFloat(req.query.lon), parseFloat(req.query.lat)
    ]
  });
});
```

In this case we use parseFloat() for coordinates (type: Number) to follow along with the GeoSchema we declared, because the URL params are always a string

## Postman

Helps test API routes, since browser can only implicitly test GET requests.

Can test many HTTP methods including GET, POST, PUT, DELETE.

When sending a request with a body make sure to choose the right data format in Postman

## bodyParser

Node and express don't inherently give access to HTTP body (ex data of POST request).

bodyParser is 3rd party middleware for express that gives this functionality.
It is important to set it up before the route handlers, so that it can be used to
access the body data of the HTTP requests.

```
$ npm install body-parser --save
```

"E.g. by adding bodyParser, you're ensuring your server handles incoming requests through the express middleware. So, now parsing the body of incoming requests is part of the procedure that your middleware takes when handling incoming requests -- all because you called app.use(bodyParser)."

### devDependencies

This command will add a module (nodemon) to the devDependencies in package.json.
Doing this will tell node that the package is not required to build the app.

```
$ npm install nodemon --save-dev
```

"With a local installation, nodemon will not be available in your system path. Instead, the local installation of nodemon can be run by calling it from within an npm script (such as npm start). "
