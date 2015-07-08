var fs = require('fs');
var db;
//var mongo = require('mongodb').createClient();

// var init = function(){
//     mongo.connect('',function(err, dbNew){
//        db = dbNew;
//     });
// };

var getProducts = function(callback){
    fs.readFile('./data/productos.json', function (err, data) {
	     if (err){ throw err; }
         callback(data.toString());
	});
};

var getCompras = function(callback){
    fs.readFile('./data/compras.json', function (err, data) {
		  if (err){ throw err; }
	      callback(data.toString());
	});
};

var getUsers = function(callback){
    fs.readFile('./data/usuarios.json', function (err, data) {
	     if (err){ throw err; }
		    callback(data.toString());
    });
};

var getUserCart = function(callback){
	fs.readFile('./data/carrito.json', function (err, data) {
		if (err) { throw err; }
			callback(data.toString());
	});
};

module.exports = {
	getProducts: getProducts,
	getCompras: getCompras,
	getUsers: getUsers,
	getUserCart: getUserCart
};
