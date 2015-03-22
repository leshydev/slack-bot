'use strict';

var request = require('request');

function Slack(url) {
  this.url = url;
};

Slack.prototype.send = function(message, cb) {
  // Set defaults
  message = message || {};
  message.text = message.text || 'No text property provided.';
  message.channel = message.channel || '#general';
  message.username = message.username || 'slack-bot';

  request.post({
    url: this.url,
    method: 'POST',
    body: JSON.stringify(message)
  }, function(err, res, body) {
    return cb ? cb(arguments) : null;
  });
};

module.exports = Slack;
