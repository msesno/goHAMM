var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://discordapp.com/api/channels/563834169579405341/messages",
  "method": "GET",
  "headers": {
    "Authorization": "Bot NTY1OTY1NDQ2MzkwNDgwOTA2.XLCe1w.ACa_D7B90zXvjjZ6ynfGt5GChwg",
    "cache-control": "no-cache",
    "Postman-Token": "8ad414b0-260c-43a8-add3-42e2f058d4e1"
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
})
.then(function(response) {
  console.log(response.data);

});

