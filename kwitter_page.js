//YOUR FIREBASE LINKS
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
room_name = localStorage.getItem("room_name");


function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code
                        console.log(firebase_message_id);
                        console.log(message_data);
                        names = message_data['name'];
                        message = message_data['message'];
                        like = message_data['like'];
                        nameswithtag = "<h4>" + names + "<img class='user_tick' src = 'tick.png'></h4>";
                        messagewithtag = "<h4 class='message_h4'>"+ message + "</h4>";
                        likeButton =  "<button class='btn btn-warning' id="+  firebase_message_id+ "value="+like+"onclick = 'updateLike(this.id)'>";
                        spanwithtag= "<span class='glyphicon glyphicon-thumbs-up'>like:"+like + "</span></button><hr>";
                        row = nameswithtag + messagewithtag + likeButton + spanwithtag;
                        document.getElementById("output").innerHTML += row;
                        //End code
                  }
            });
      });
}
getData();

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });
      document.getElementById("msg").value = "";

}
