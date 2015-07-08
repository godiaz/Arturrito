var dataManager = require('./dataManager.js');
var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/getuser', function (req, res) {
  res.setHeader('Content-Type', 'application/json');

  var callback = function (data){
  	res.send(data);
  };

  dataManager.getUsers(callback);
});

app.get('/getproducts', function (req, res) {
	res.setHeader('Content-Type', 'application/json');
    dataManager.getProducts(function (data){
  	res.send(data);
  });
});

app.get('/getcompras', function (req, res) {
	res.setHeader('Content-Type', 'application/json');
	dataManager.getCompras(function (data){
  	res.send(data);
  });
});

app.get('/getUserCart', function (req, res){
	res.setHeader('Content-Type', 'application/json');
	dataManager.getUserCart(function (data){
	res.send(data);
	});	
});

app.post('/login', function (req, res) {
	res.setHeader('Content-Type', 'application/json');
	fs.readFile('./data/users.json', function (err, data) {
		  if (err){ throw err; }
	        if(json.parse(data.toString()).username === 'pepe'){
		       res.send(data);
	        }
		    else {
		    	res.send(false);
		    }
	});
});

app.post('/addProductCart', function (req, res) {
	res.setHeader('Content-Type', 'application/json');
	dataManager.getProductCart(function (data){
	console.log("INFO: sending product cart data... ");
	res.send(data);
	})
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('INIT: Server listening on ' +  host + ":"+ port);

});


