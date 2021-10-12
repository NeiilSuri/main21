
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyClk3aH3ga1-4hWQFnGe0Jb9G1fsSelJa4",
      authDomain: "kwitter-3f773.firebaseapp.com",
      databaseURL: "https://kwitter-3f773-default-rtdb.firebaseio.com",
      projectId: "kwitter-3f773",
      storageBucket: "kwitter-3f773.appspot.com",
      messagingSenderId: "274720410666",
      appId: "1:274720410666:web:cd289ccc3c9e8469f44753"
};
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kiwtter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  console.log("Room name - " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;

                  //End code
            });
      });
}
getData();
function redirectToRoomName(name) 
{
console.log(name);
localStorage.setItem("room_name" , name);
window.location = "kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}
