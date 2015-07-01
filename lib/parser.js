var request = require('request');

module.exports = function(league) {

    request('http://sports.espn.go.com/'+league+'/bottomline/scores', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body); // Show the HTML for the Google homepage.
        }
    });
};

