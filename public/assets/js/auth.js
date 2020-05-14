var mainApp = {};
(function () {
  var firebase = app_fireBase;
  var uid = null;
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      uid = user.uid;
      console.log("signed in");
      document.getElementById("logoutbutton").style.display = "block";
      document.getElementById("logoutbutton").onclick = function () {
        firebase.auth().signOut();
      };
    } else {
      // redirect to login
      uid = null;

      window.location.replace("login.html");
      alert("Please Sign in or Sign up");
      console.log("signed out");
    }
  });
  function logOut() {
    firebase.auth().signOut();
  }
  mainApp.logOut = logOut;
})();
