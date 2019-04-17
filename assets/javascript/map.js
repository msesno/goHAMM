// $(document).ready(function (){

    var map;

    function initMap() {
        map = new google.maps.Map(document.getElementById('pokemap'), {
        zoom: 10,
        center: new google.maps.LatLng(39.952768, -75.163027),
        mapTypeId: 'roadmap'
        });
    }

    var source = {
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

    $.ajax(source).then(function (response) {
        console.log(response);

        for (var i = 0; i < response.length; i++) {

            var pokeball = { 
                url: "assets/images/pokeball.svg",
                } 

            let coords = [];

            var coordigin = response[i].embeds[0].fields[2].value;
            var coordString = coordigin.slice(44, 78);
            var coordLat = coordString.slice(0,16);
            var coordLong = coordString.slice(17,34);
            coords.push(coordLong);
            coords.push(coordLat);

            let array = [];
            let array2 = [];
            let bigArray = [];

            let string1 = response[i].embeds[0].fields[0].name;
            let string2 = response[i].embeds[0].fields[1].name;

            array = string1.split(" ", 7);
            array.splice(1,1);
            array.splice(3,1);
            let nameTemp = array.splice(0,1);
            let nameNew = nameTemp.join();
            let name = nameNew.substring(2,nameNew.length-2);

            let newArray = array.splice(2,2);
            let CP = newArray.join(" ");
            let newString = array.join(" ");
            bigArray = newString.split("\n");
            
            array2 = string2.split(" ");
            array2.splice(0,3);
            let despawn = array2.join(" ");
        
            bigArray.push(CP);
            bigArray.push(name);
            bigArray.push(despawn);

            let thumbnail = response[i].embeds[0].thumbnail.url;

            var latLng = new google.maps.LatLng(coords[1],coords[0]);
            var marker = new google.maps.Marker({
                    position: latLng,
                    map: map,
                    icon: pokeball
                    });
                
            var infoWindow = new google.maps.InfoWindow({
            });
        
            marker.addListener("click",
            (function (marker, i) {
                return function (){
                    infoWindow.setContent(`

                        <div class="window">
                            <div class="thumbnail">
                                <img class="pict" src=${thumbnail}>
                            </div>

                            <div class="poke-stats">
                                <h6 class="poke-name">${bigArray[3]}</h6>
                                <p class="stat-line">${bigArray[1]}</p>
                                <p class="stat-line">${bigArray[0]}</p>
                                <p class="stat-line">${bigArray[2]}</p>
                                <p class="stat-line">${bigArray[4]}</p>
                            </div>

                        </div>
                                            `);
                    infoWindow.open(map, marker);
                }

            })(marker, i)

            );

        }
           
    });


// });