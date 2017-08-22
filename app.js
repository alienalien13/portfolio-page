var express = require('express'),
	pug = require('pug'),
	app = express();

/* app setup */
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/dist'));
app.get('/', (req, res) => {
	res.render('/index.html')
});
/* --- */


/* dev */
/* app.set('port', (process.env.PORT || 4000));
app.use(express.static(__dirname + '/src'));
app.set('views', __dirname + '/src/view');
app.set('view engine', 'pug');
app.get('/', (req, res) => {
	res.render('index')
}); */

/* auxiliary routing */
app.get('/google885327df46f587f4.html', (req, res) => {
	res.sendFile('google885327df46f587f4.html')
});
app.get('/images/me.jpg', (req, res) => {
	res.sendFile('images/me.jpg')
});
app.get('/images/favicon.ico', (req, res) => {
	res.sendFile('images/favicon.ico')
});
app.get('/favicon.ico', (req, res) => {
	res.sendFile('images/favicon.ico')
});
/* --- */

/* listner */
app.listen(app.get('port'), () => {
	console.log('Node app is running on port', app.get('port'));
});
/* --- */