var express = require('express'),
app = express();

/* app setup */
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/dist'));
app.get('/', function(req,res){
	res.render('/index.html')
});
/* --- */

/* auxiliary routing */
app.get('/google885327df46f587f4.html', function(req,res){
	res.sendFile('google885327df46f587f4.html')
});
app.get('/images/me.jpg', function(req,res){
	res.sendFile('images/me.jpg')
});
app.get('/images/favicon.ico', function(req,res){
	res.sendFile('images/favicon.ico')
});
app.get('/favicon.ico', function(req,res){
	res.sendFile('images/favicon.ico')
});
/* --- */

/* listner */
app.listen(app.get('port'), function() {
	console.log('Node app is running on port', app.get('port'));
});
/* --- */