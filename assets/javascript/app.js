// GLOBAL VARIABLES
var res;
var thumb;
$(document).ready(function () {

  var config = {
    apiKey: "AIzaSyCI3XGNh4Nvo8rXYDWnVc7KYbNdwxTRbYY",
    authDomain: "phila-pokedex.firebaseapp.com",
    databaseURL: "https://phila-pokedex.firebaseio.com",
    projectId: "phila-pokedex",
    storageBucket: "phila-pokedex.appspot.com",
    messagingSenderId: "678564572304"
  };

  firebase.initializeApp(config);

  var database = firebase.database();

  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://cors-anywhere.herokuapp.com/https://discordapp.com/api/channels/563834169579405341/messages?limit=100",
    "method": "GET",
    "headers": {
      "Authorization": "Bot NTY1OTY1NDQ2MzkwNDgwOTA2.XLCe1w.ACa_D7B90zXvjjZ6ynfGt5GChwg",
      "cache-control": "no-cache",
      "Postman-Token": "8ad414b0-260c-43a8-add3-42e2f058d4e1",
    }
  }

  $.ajax(settings).then(function (response) {
    console.log(response);
    res = response;
    // GRAB IMAGE
    
    console.log("Thumb: " + JSON.stringify(thumb));

    var statsArr = GrabStats(response);
    console.log(statsArr);
    GrabCharInfo(statsArr);
  })



  function GrabCharInfo(statsArr) {
    var charName = statsArr[0];
    var charIV = statsArr[2];
    var charCP = statsArr[8];
    var charLvl = statsArr[5];

     thumb = GrabThumbNail(res);


    var character = {
      name: charName,
      IV: charIV,
      CP: charCP,
      Lvl: charLvl
    }

    AddCharRow();

    function AddCharRow() {
      console.log("AddCharRow:");
      var tr = $("<tr>");
      
      var td = $("<td>");
      td.html(thumb);
      tr.append(td);
      

      DisplayStat(charName);
      DisplayStat(charIV);
      DisplayStat(charCP);
      DisplayStat(charLvl);
      function DisplayStat(item) {
        var td = $("<td>");
        td.text(item);
        tr.append(td);
        $("tbody").append(tr);
      }
    }
  }
}
)




function GrabThumbNail(response) {
  var imgSrc = response[0].embeds[0].thumbnail.url;
  var img = $("<img>");
  img.attr("src", imgSrc);
  return img;
}

function GrabStats(response) {
  statsArr = [];
  stats = response[0].embeds[0].fields[0].name;
  console.log(stats);
  statsArr = stats.split(" ");
  console.log("Stats Array" + statsArr);
  return statsArr;
}

