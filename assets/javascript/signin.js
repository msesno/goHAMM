


// Initialize Firebase
var config = {
  apiKey: "AIzaSyCI3XGNh4Nvo8rXYDWnVc7KYbNdwxTRbYY",
  authDomain: "phila-pokedex.firebaseapp.com",
  databaseURL: "https://phila-pokedex.firebaseio.com",
  projectId: "phila-pokedex",
  storageBucket: "phila-pokedex.appspot.com",
  messagingSenderId: "678564572304"
};

firebase.initializeApp(config);


// FirebaseUI config.

        var uiConfig = {
            signInSuccessUrl: 'home.html',
            signInOptions: [
                firebase.auth.GoogleAuthProvider.PROVIDER_ID
            ]
        };

         // Initialize the FirebaseUI Widget using Firebase. 
        var ui = new firebaseui.auth.AuthUI(firebase.auth());
        
        // The start method will wait until the DOM is loaded.
        ui.start('#firebaseui-auth-container', uiConfig);
