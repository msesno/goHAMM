Skip to content
 
Search or jump to…

Pull requests
Issues
Marketplace
Explore
 
@apg2677 
0
0 0 Limbach17/goHAMM
 Code  Issues 0  Pull requests 0  Projects 0  Wiki  Insights
goHAMM/experiment.html
@Limbach17 Limbach17 experiment added
7da0e97 19 minutes ago
82 lines (66 sloc)  2.63 KB
    
<!DOCTYPE html>
<html>
    <head>
        <title>Experiment</title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    </head>
    <body>
        <script>
            var array = [];
            var array2 = [];
            var bigArray = [];
            var string1 = "**Wobbuffet** 4/10/8 (49%)↵Level 15 | CP 364 <:male:551982532619665415>";
            var string2 = "<:check_yes:526152796131819520>: 1:34 PM (*27m 41s*)";
            var array = string1.split(" ", 7);
            console.log("array: " + array);
            array.splice(1,1);
            console.log("array: " + array);
            array.splice(3,1);
            console.log("array: " + array);
            var name = array.splice(0,1);
            console.log("array: " + array);
            console.log("name: " + name);
            var newArray = array.splice(2,2);
            console.log("newArray: " + newArray);
            var CP = newArray.join(" ");
            console.log("CP: " + CP);
            console.log("array: " + array);
            var newString = array.join(" ");
            console.log("newString: " + newString);
            bigArray = newString.split("↵");
            console.log("bigArray: " + bigArray);
            
            console.log("-------");
            var array2 = string2.split(" ");
            console.log("array2: " + array2);
            array2.splice(0,3);
            console.log("array2: " + array2);
            var despawn = array2.join(" ");
            console.log("despawn: " + despawn);
            console.log("----------")
            bigArray.push(CP);
            bigArray.push(name);
            bigArray.push(despawn);
            console.log("bigArray: " + bigArray);
            ////// WITHOUT CONSOLE LOGS/////
            var array = [];
            var array2 = [];
            var bigArray = [];
            var string1 = "**Wobbuffet** 4/10/8 (49%)↵Level 15 | CP 364 <:male:551982532619665415>";
            var string2 = "<:check_yes:526152796131819520>: 1:34 PM (*27m 41s*)";
            var array = string1.split(" ", 7);
            array.splice(1,1);
            array.splice(3,1);
            var name = array.splice(0,1);
            var newArray = array.splice(2,2);
            var CP = newArray.join(" ");
            var newString = array.join(" ");
            bigArray = newString.split("↵");
            
            var array2 = string2.split(" ");
            array2.splice(0,3);
            var despawn = array2.join(" ");
            bigArray.push(CP);
            bigArray.push(name);
            bigArray.push(despawn);
        </script>
    </body>
</html>
© 2019 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
Pricing
API
Training
Blog
About
Revert apg2677 merged commit 9664e19 into master just now