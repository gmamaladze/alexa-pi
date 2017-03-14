var alexa = require('alexa-app');

module.change_code = 1;

const appName = 'blechdose';
var app = new alexa.app(appName);
app.launch(function(req, res) {
    res.say("Was soll ich tun? Sage, zum Beispiel, fahre drei schritte nach vorne, oder drehe dich nach links um.");
    console.log('%s: Launched.', appName);
});

app.intent("DriveIntent",
    function(req, res) {
        var direction = req.slot('direction');
        if (direction) {
            if (!res.session('path')) {
                res.session('path', []);
            }
            var path = res.session('path');
            path.push(direction);
            res.session('path', path);
            res.say('Ok. Weiter?');
            console.log('%s: %s', appName, path);
        } else {
            res.say("Was meinst du?");
        }
        res.shouldEndSession(false);
    }
  );

module.exports = app;
