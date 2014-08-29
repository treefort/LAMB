var express   	= require('express'),
	lamb		= require('../lamb.js'),
	app       	= express();


app.engine('lamb', lamb().__express);
app.set('views', __dirname + '/views')
app.set('view engine', 'lamb');

app.get('/', function (req, res) {
  res.render('home');
  //res.status(200).end();
})

app.use(express.static(__dirname + '/static'));

app.listen(3000);

console.log("*** LAMB test: middleware ***");
console.log("*** Try http://localhost:3000 ***");






