var alexa = require('alexa-app');

// Allow this module to be reloaded by hotswap when changed
module.change_code = 1;

// Define an alexa-app
var app = new alexa.app('blechdose');
app.launch(function(req, res) {
  res.say("Hello World!!");
});

app.intent('Hallo', {
  "slots": { },
  "utterances": ["Eins"]
}, function(req, res) {
  res.say('Zwei');
});

module.exports = app;
