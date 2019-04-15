


// Initialize Firebase
var config = {
  apiKey: "AIzaSyAzJQYofNF8SOAjr-i9WiUnc_eC8sJU1Nc",
  authDomain: "pokedump-f9a36.firebaseapp.com",
  databaseURL: "https://pokedump-f9a36.firebaseio.com",
  projectId: "pokedump-f9a36",
  storageBucket: "pokedump-f9a36.appspot.com",
  messagingSenderId: "673903030426"
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
