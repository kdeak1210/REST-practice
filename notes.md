# What is a REST API?

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

- GET - Used to retrieve data from the server
- POST - Used to send data to the server
- PUT - Used to update data
- DELETE - Used to delete data

#### They Make use of HTTP Status Codes
Examples:
	- 200 means OK
	- 404 means resource not found
	- 500 means server error
