
var firebaseConfig = {
    apiKey: "AIzaSyA1-3fVmkXEtkg00Xvk44XpIkdv2vm0h20",
    authDomain: "chatapp4142.firebaseapp.com",
    databaseURL: "https://chatapp4142.firebaseio.com",
    projectId: "chatapp4142",
    storageBucket: "chatapp4142.appspot.com",
    messagingSenderId: "1073445067012",
    appId: "1:1073445067012:web:d978f4ab9db76f8810d851",
    measurementId: "G-8WP2HWHDJB"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  b = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + b + "!";

function addRoom()
{
  c = document.getElementById("room_name").value;
console.log("Local Storage ",c);
  firebase.database().ref("/").child(c).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", c);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot)
 { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) 
 { childKey  = childSnapshot.key;
       x = childKey;
       console.log("Room Name of childkey- " + x);
      row = "<div class='room_name' id="+x+" onclick='redirectToRoomName(this.id)' >Room Name : "+ x +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(e)
{
  console.log("redirect function parameter",e);
  localStorage.setItem("room_name", e);
  window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}
