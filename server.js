var express = require("express");
var app = express();
var port = 3000;
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("./app/public"));

require("./app/routing/htmlRoutes.js")(app);
require("./app/routing/apiRoutes.js")(app);
//comment 


// app.use("/", home);
// app.get("/", function(req, res){

// 	res.sendFile(path.join(__dirname + "app/public/home.html"))
// });

// app.get("/survey", function(req, res){

// 	res.sendFile(path.join(__dirname + "app/public/survey.html"))
// });

// app.post("/friendInfo", function(req, res){


// 	console.log(req.body);


// });






app.listen(port, function(){

	console.log("Listening on port: " + port);
});
