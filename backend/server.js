var express = require('express');
var mongoose = require('mongoose');
var path = require('path');

var app = express();
app.use(express.static(path.resolve(__dirname, '../frontend/dist')));

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  	res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    next();
});

mongoose.connect('mongodb://localhost/mediaLop');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('connected');
});

var kittySchema = mongoose.Schema({
    name: String
});
var KittenModel = mongoose.model('Kitten', kittySchema);

var userSchema = new mongoose.Schema({
  // id_: 'number',
	user: 'string',
	name: 'string'
});

var UserModel = mongoose.model('User',userSchema);
//New lines!
app.get('/api/',function(req,res) {
	res.send('Working');
});

app.get('/api/users', function(req,res) {
	UserModel.find(function(err,docs) {
    console.log(docs);
		if(err) {
			res.send(err);
		}
		else {
			// res.send(docs);
      res.send({data: docs});
		}
	});
});

app.get('/api/kittens', function(req,res) {
	KittenModel.find(function(err,docs) {
    console.log(docs);
		if(err) {
			res.send(err);
		}
		else {
			// res.send(docs);
      res.send({data: docs});
		}
	});
});
app.get('/api/kitten', function(req,res) {
  var fluffy = new KittenModel({ name: 'fluffy' });

  fluffy.save(function (err, fluffy) {
    if (err) return console.error(err);
    else {
      res.send({data: fluffy})
    }
    // fluffy.speak();
  });

});

app.listen('4500');
