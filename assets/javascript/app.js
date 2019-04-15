// GLOBAL VARIABLES
var res;
var thumb;
var character={};
var despawn;

$(document).ready(function () {

  $("audio#opening-theme")[0].play();

  var config = {
    apiKey: "AIzaSyAzJQYofNF8SOAjr-i9WiUnc_eC8sJU1Nc",
    authDomain: "pokedump-f9a36.firebaseapp.com",
    databaseURL: "https://pokedump-f9a36.firebaseio.com",
    projectId: "pokedump-f9a36",
    storageBucket: "pokedump-f9a36.appspot.com",
    messagingSenderId: "673903030426"
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
   
    
    
    for (var i=0;i<5;i++) {
      thumb = GrabThumbNail(res[i]);
      GrabStats(res[i]);
      GrabCharInfo(statsArr);
      database.ref().push(character);
      despawn = GrabDespawn(res[i]);
      console.log("Despawn Time: " + despawn);
    }
    
  })



  function GrabCharInfo(statsArr) {
    var charName = statsArr[0];
    var charIV = statsArr[2];
    var charCP = statsArr[8];
    var charLvl = statsArr[5];

     


    character = {
      name: charName,
      IV: charIV,
      CP: charCP,
      Lvl: charLvl
    }

    AddCharRow();

    function AddCharRow() {
      console.log("AddCharRow:");
      var tr = $("<tr>");
      
      AddImage();
      

      DisplayStat(charName);
      DisplayStat(charIV);
      DisplayStat(charCP);
      DisplayStat(charLvl);
      DisplayStat(despawn);

      function AddImage() {
        var td = $("<td>");
        td.html(thumb);
        tr.append(td);
      }

      function DisplayStat(item) {
        var td = $("<td>");
        td.text(item);
        tr.append(td);
        $("tbody").append(tr);
      }
    }
  }
});







function GrabThumbNail(item) {
  console.log("Item: " + item);
  var imgSrc = item.embeds[0].thumbnail.url;
  var img = $("<img>");
  img.attr("src", imgSrc);
  return img;
}

function GrabStats(item) {
  statsArr = [];
  stats = item.embeds[0].fields[0].name;
  console.log(stats);
  statsArr = stats.split(" ");
  console.log("Stats Array" + statsArr);
  return statsArr;
}
function GrabDespawn(item) {
  statsArr = [];
  stats = item.embeds[0].fields[1].name;
  console.log(stats);
  statsArr = stats.split(" ");
  console.log("Stats Array" + statsArr);
  var time = moment(statsArr[1] + statsArr[2], "hh:mm a");
  console.log("time: " + time.format("hh:mm a"));
  time2 = time.add(-29, "m");
  console.log("Time - 20 " + time2.format("hh:mm a"));

  var timeLeft = moment().diff(time2, 'minutes');
  console.log(timeLeft);

  return timeLeft;
}
