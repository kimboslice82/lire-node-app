var keys = require('./keys.js').twitterKeys;

var Twitter = require('twitter');

var command = process.argv[2];
//console.log(process.argv);

switch (command ){
    case "my-tweets":
  
        var client = new Twitter(keys);
        var params = {screen_name: 'hoodkimberley11', count: 20};
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
        tweets.forEach(function(tweet) {
            console.log(tweet.text);
        })
    }
    });
    break;
    case 'spotify-this-song':
    console.log("test this crap again");
    break;

case 'movie-this':
    console.log("test this crap again again");
    break;

    case 'do-what-it-says':
    console.log("test this crap last");
    break;
  }
