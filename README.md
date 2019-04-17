# goHAMM
https://github.com/Limbach17/goHAMM

- An app that displays active pokemons in philly in row or map format, and removed after despawn.
- Player catches 2 pokes and then battle against 2 random computer choices.

Game: 
- player choose 2 spawns; store in dom;
- computer choose 2 spawns; store in dom;
- player presses battle and both teams battle according to object stats

Outcome: 
- Player or computer gets wins or losses according to choices/battles

# Idea
This app will use:
discord api @ https://discordapp.com/developers/docs/resources/webhook <br>
rapidAPI for pokemon go @ https://rapidapi.com/brianiswu/api/pokemon-go1/details <br>
- google maps api https://developers.google.com/maps/documentation/

# Members on Github
Limbach17 <br>
apg2677 <br>
msesno <br>
handonekal<br>

# Concept
Project Title
- Poke goHamm 

Team Name
- goHAMM

Team Members
- Limbach17 <br>
- apg2677 <br>
- msesno <br>
- handonekal<br>

Project Description
- An app that displays active pokemons in philly in row format, and removed after despawn.
- Player catches 2 pokes and then battle against 2 random computer choices.

Sketch of Final Product
- https://limbach17.github.io/goHAMM/assets/images/concept.jpg

APIs to be Used
- discord api @ https://discordapp.com/developers/docs/resources/webhook <br>
- rapidAPI for pokemon go @ https://rapidapi.com/brianiswu/api/pokemon-go1/details <br>


Rough Breakdown of Tasks
- Game: 
  - player choose 2 spawns; store in dom;
  - computer choose 2 spawns; store in dom;
  - player presses battle and both teams battle according to object stats

- Outcome: 
  - Player or computer gets wins or losses according to choices/battles


#MVP
 1. Who is your target audience?
 pokemon go users
  2. What is the problem that the product will address?
 the app will display active pokemons in philly in row format, and remove after despawn. Player catches 2 pokes and then battle against 2 random computer choices.

  3. What is the primary goal of the product?
  the player and the comp chooses 2 spawns each and they store in the dom, when the player presses battle both teams battle according to object stats.

  4. Identify and prioritize essential user stories (limit this to 3 or fewer)?
  - as a user, i want to see the highest cp pokemons displayed in row format
  - as a user, i want to see the highest iv pokemons displayed in row format
  - as a user, i want to see the closest pokemons displayed in row format

#Presentation
We wanted to create an app that displays active pokemons in the city of philadelphia in a row or map format, and removed after despawn. The pokemon object stats will be displayed in row format, and also as a pin on map section. We used the discord Api to get messages from discord channel, store in browser, and output image, stats and despawn time. We used firebase to store user logins for redirect to home.html page. The google maps Api was implemented to display the pokemon location on a map according to geo coordinates. Lastly a button to toggle theme music will be available in the nav bar, top right, and a refresh data button top left.

#spawn table
On page load, js uses the discord api and pulls the last 100 messgaes from channel id, then stores in browser cache. The spawn table populates data from cache and displays time left to despawn, image, name, iv, cp, and level. Page refresh gets last messages post from discord channel.


#search
The search function will find users input for name, iv, or cp. It only will search the total spawns in browser cache on page load. Page refresh gets last messages post from discord channel.

#map
The map section places pokemon pin using geo coordinates from the browser cache on to map leaflet and the data refreshes with new coordinates. Page refresh gets last messages post from discord channel.


#signin
Sign in page removes protected data and authenticates from google key. Firebase then stores the users login info to regulate data rights management.

#notes
Original concept we wanted to incorpate a simple battle rpg game, but instead focused on discord and google map Api's
