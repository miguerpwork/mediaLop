var express = require('express');
var mongoose = require('mongoose');
var path = require('path');

var app = express();
app.use(express.static(path.resolve(__dirname, '../frontend/dist')));
console.log(__dirname);
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  	res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    next();
});

mongoose.connect('mongodb://104.131.47.69/mediaLop');
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
  });

});

app.post('/api/login', function(req, res) {
  if(req.body.grant_type === 'password') {
      	
	UserModel.findOne({username: req.body.username, password: req.body.password}, function(err, user) {
	    if(err) {
	        res.status(400).send('{ "error": "invalid_grant" }');
	    }else {
	        res.status(200).send('{ "access_token": "token"}');
	    }
    });
  }else {
    res.status(400).send('{ "error": "unsupported_grant_type" }');
  }
});  

app.listen(process.env.PORT || '4500');
