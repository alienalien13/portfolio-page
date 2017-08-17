var express = require('express'),
app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/dist'));

app.get('/', function(req,res){
	res.render('/index.html')
});
app.get('/google885327df46f587f4.html', function(req,res){
	res.sendFile('/google885327df46f587f4.html')
});

app.listen(app.get('port'), function() {
	console.log('Node app is running on port', app.get('port'));
});