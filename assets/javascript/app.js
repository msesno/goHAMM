
// GLOBAL VARIABLES
var res;
var thumb;
var character = {};
var despawn = 0;

$(document).ready(function () {

  $("audio#opening-theme")[0].play();

  
  $('.play').click(function(){
    var $this = $(this);
    var id = $this.attr('id').replace(/btn/, '');
    $this.toggleClass('active');
    if($this.hasClass('active')){
        $this.text('PAUSE'); 
        $('audio#opening-theme')[0].play();        
    } else {
        $this.text('PLAY');
        $('audio#opening-theme')[0].pause();
    }
  });

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
    "url": "https://cors-anywhere.herokuapp.com/https://discordapp.com/api/channels/563834169579405341/messages",
    "method": "GET",
    "headers": {
      "Authorization": "Bot NTY1OTY1NDQ2MzkwNDgwOTA2.XLCf5Q.JzzvHzmlsNLyHZTRFcWBe0GQ3kQ",
      "cache-control": "no-cache",
      "Postman-Token": "66e2a65e-162b-4431-af25-333f03cd6b83"
    }
  }

  // $.ajax(settings).done(function (response) {
  //   console.log(response);

  //   console.log(response[0].embeds[0].thumbnail.url);
  //   var tempImg = response[0].embeds[0].thumbnail.url;
  //   var tempChar = response[0].embeds[0].fields;
  //   $("#imgPokemon").attr("src", tempImg);
  //   console.log(tempChar);
  //   for (var i = 0; i < 3; i++) {
  //     console.log(tempChar[i].name);

  //     var statsArr = tempChar[0].name.split(" ");

  //     console.log("Stats Array: " + statsArr);
  //     for (var i = 0; i < statsArr.length; i++) {
  //       console.log("i: " + i + "    " + statsArr[i]);

  //     }


      $.ajax(settings).then(function (response) {
        console.log(response);
        res = response;



        for (var i = 0; i < 5; i++) {
          thumb = GrabThumbNail(res[i]);
          GrabStats(res[i]);
          GrabCharInfo(statsArr);
          database.ref().push(character);
          despawn = GrabDespawn(res[i]);
          console.log("Despawn Time: " + despawn);
        }

      });



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


