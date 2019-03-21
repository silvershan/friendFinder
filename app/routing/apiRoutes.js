var path = require('path');

var friendsData = require("../data/friends.js");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
      });
    
      app.post("/api/friends", function(req, res) {
        console.log(req.body.scores);

        var userInput = req.body;

        for (var i=0; i<userInput.scores.length; i++) {
            userInput.scores[i] = parseInt(userInput.scores[i]);
        }

        var bestFriend = 0;

        var minimumDifference = 40;

        

        for (var i=0; i < friendsData.length; i++) {
            var totalDifference = 0;
            for (var j=0; j < friendsData[i].scores.length; j++) {
                var difference = Math.abs(userInput.scores[j] - friendsData[i].scores[j]);
                totalDifference += difference;
            }

            if (totalDifference > minimumDifference) {
                bestFriend = i;
                minimumDifference = totalDifference;
            }
        }
        friendsData.push(userInput);

        res.json(friendsData[bestFriend]);
      });
    };