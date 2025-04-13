/* Login Page */
document.addEventListener("DOMContentLoaded", () => {
   console.log("js works");
});

let body = document.body;
let loginform  = document.getElementById("loginform")
let submitButton = document.getElementById("submitb");

submitButton.addEventListener("click", function () {
body.classList.add("blurred");
loginform.style.display = "grid";

})






// login.js

// Überprüfen, ob der Benutzer bereits eingeloggt ist
if (localStorage.getItem("loggedInUser")) {
  document.getElementById("loader").style.display = "flex";
  setTimeout(() => {
    
    window.location.href = "relaxocard.html.html";
  }, 1000);

    // Weiterleitung, wenn der Benutzer eingeloggt ist
 }
 
 // Funktion für den Login-Prozess
 document.getElementById("continueb").addEventListener("click", function() {
   const username = document.getElementById("username").value;
   const password = document.getElementById("password").value;
 
   // Überprüfen, ob der Benutzername und das Passwort existieren
   let storedUser = JSON.parse(localStorage.getItem(username));  // Benutzerdaten aus localStorage holen
 
   if (!storedUser) {
     // Benutzer existiert noch nicht -> Benutzer speichern
     storedUser = { username, password };
     localStorage.setItem(username, JSON.stringify(storedUser)); // Benutzerdaten speichern
   }
 
   // Überprüfen, ob das eingegebene Passwort mit dem gespeicherten übereinstimmt
   if (storedUser.username === username && storedUser.password === password) {
     // ✅ Login erfolgreich → Benutzername speichern und zur Hauptseite weiterleiten
     localStorage.setItem("loggedInUser", username);
     document.getElementById("loader").style.display = "flex";  // Benutzer als eingeloggt markieren
     setTimeout(() => {
      window.location.href = "relaxocard.html.html";
    }, 1000); // Weiterleitung zur Hauptseite
   } else {
     // ❌ Fehler: Falsche Daten
     alert("Falsche Daten! Bitte versuche es erneut.");
   }
 });
 

 localStorage.clear();
