var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://cors-anywhere.herokuapp.com/https://discordapp.com/api/channels/563834169579405341/messages",
    "method": "GET",
    "headers": {
      "Authorization": "Bot NTY1OTY1NDQ2MzkwNDgwOTA2.XLCf5Q.JzzvHzmlsNLyHZTRFcWBe0GQ3kQ",
      "cache-control": "no-cache",
      "Postman-Token": "66e2a65e-162b-4431-af25-333f03cd6b83"
    }
  }
  
  $.ajax(settings).done(function (response) {
      console.log(response);

    console.log(response[0].embeds[0].thumbnail.url);
    var tempImg = response[0].embeds[0].thumbnail.url;
    var tempChar = response[0].embeds[0].fields;
    $("#imgPokemon").attr("src", tempImg);
    console.log(tempChar);
    for(var i=0;i<3;i++) 
    {
        console.log(tempChar[i].name);
        
         var statsArr =  tempChar[0].name.split(" ");
      
         console.log("Stats Array: " + statsArr);
        for(var i=0;i<statsArr.length;i++) {
          console.log("i: " + i + "    " + statsArr[i]);

        }

        GrabCharInfo(statsArr);

       

    } 
  })

function GrabCharInfo(statsArr) {
  var charName = statsArr[0];
  var charIV = statsArr[2];
  var charCP = statsArr[8];
  var charLvl = statsArr[5];

  Display(charName);
  Display(charIV);
  Display(charCP);
  Display(charLvl);
  
  function Display(item) {
    var tempDiv = $("<div>");
    tempDiv.text(item);
    $(".row").append(tempDiv);
 
 
 }
}

