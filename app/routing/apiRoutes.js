var path = require("path");
var friendList = require("../data/friends");

module.exports = function(app) {

	app.get('/api/friends', function(req, res){

		res.json(friendList);


	});


	app.post('/api/friends', function(req,res){

		var newFriend = req.body;

		var differenceArr = [];


		for (var i=0; i< friendList.length; i++) {

			var totalDifference = 0;

			var questions = friendList[i].scores.length;

			for(var j=0; j< 2; j++){


				totalDifference += Math.abs(friendList[i].scores[j] - newFriend.scores[j]);

				}

			differenceArr.push(totalDifference);

		}

		console.log("this is the difference", differenceArr);

		var bffIndex = Math.min.apply(null, differenceArr);
		var match = differenceArr.indexOf(bffIndex);
		var bff = friendList[match];

		res.json(bff);
		console.log(bff);


	})

};