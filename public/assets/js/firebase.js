// Your web app's Firebase configuration
var app_fireBase = {};
(function () {
  var firebaseConfig = {
    apiKey: "AIzaSyC5iicXP9ZO9N-yGVWsVRlZYehacYL33VA",
    authDomain: "quizizz-hack.firebaseapp.com",
    databaseURL: "https://quizizz-hack.firebaseio.com",
    projectId: "quizizz-hack",
    storageBucket: "quizizz-hack.appspot.com",
    messagingSenderId: "118963867413",
    appId: "1:118963867413:web:6e5a0143add735fc99231c",
    measurementId: "G-NRYMDG1JJW",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  app_fireBase = firebase;
})();
