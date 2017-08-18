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

## Postman

Helps test API routes, since browser can only implicitly test GET requests.

Can test many HTTP methods including GET, POST, PUT, DELETE.

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
