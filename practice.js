var firebaseConfig = {
    apiKey: "AIzaSyDzUkwjLcFKd1CCrpTp-62lwopFN5iLs7k",
    authDomain: "kwitter-379ea.firebaseapp.com",
    databaseURL: "https://kwitter-379ea-default-rtdb.firebaseio.com",
    projectId: "kwitter-379ea",
    storageBucket: "kwitter-379ea.appspot.com",
    messagingSenderId: "1089918263140",
    appId: "1:1089918263140:web:0fe4bb80ea239fa5752471"
  };

firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

function addUser(){
    user_name = document.getElementById('user_name').value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}
