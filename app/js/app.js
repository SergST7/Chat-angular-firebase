/**
 * Created by SergST on 20.12.2016.
 */


// Initialize Firebase
var config = {
        apiKey: "AIzaSyBc7yz4jUSVMN7Lr0lCwZ1bdAeYk-GfrTg",
        authDomain: "angularchat-7713f.firebaseapp.com",
        databaseURL: "https://angularchat-7713f.firebaseio.com",
        storageBucket: "angularchat-7713f.appspot.com",
        messagingSenderId: "680642183359"
    };
firebase.initializeApp(config);

angular
    .module('afbChat', ['firebase']);