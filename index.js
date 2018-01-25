var express = require('express')
var api = require('request')

var app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));




// ---- CORS
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8888');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});





// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.render('beam_api')
})





app.get('/user', function(req, res) {


	api('https://staging.beam-api.com/user/', function (error, response, body) {
	  console.log('error:', error); 
	  console.log('statusCode:', response && response.statusCode); 
	  console.log('body:', body); 

	  res.send(body);

	});

})


app.get('/device', function(req, res) {


	api('https://staging.beam-api.com/device/', function (error, response, body) {
	  console.log('error:', error); 
	  console.log('statusCode:', response && response.statusCode); 
	  console.log('body:', body); 

	  res.send(body);

	});

})


app.listen(3000, () => console.log('Example app listening on port 3000!'));
