var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


// var express = require('express');
// var app = express();

// var browserify = require('browserify');
// var path = require('path');

// // viewed at http://localhost:8080
// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname + '/index.html'));

    
// });



// app.all('*',function(req,res){
// 	console.log("Req");

// 	 if (req.url === '/bundle.js') {
// 	 	console.log('inside bundele');
//         res.setHeader('content-type', 'application/javascript');
//         var b = browserify(__dirname + '/public/angularDemo.js').bundle();
//         b.on('error', console.error);
//         b.pipe(res);
//     }
//     else res.writeHead(404, 'not found')

// });



// app.use(express.static('public'));

// var server = app.listen(3000, function(){
// 	var host = server.address().address;
// 	var port = server.address().port;

// 	console.log(host + " port - " + port);
// });

