// Get required libraries and config
var irc = require('irc'),
conf = require('./config');

// Create new client object
var client = new irc.Client({
    connection: { host: conf.serverhost, port: conf.serverport },
    identity: { nickname: conf.nickname, username: conf.nickname, realname: conf.realname }
});

// Set channels to join
//var channel = client.channel("#jine");

channel.on("message", function(message) {
    channel.send("%s: %s", message.nickname, message.text);
})

client.connect(function() {
    console.log("Connected.");
});
