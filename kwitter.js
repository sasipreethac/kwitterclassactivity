
function addUser() {

  a = document.getElementById("user_name").value;

  localStorage.setItem("user_name", a);
  
    window.location = "kwitter_room.html";
}

