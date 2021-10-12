const firebaseConfig = {
    apiKey: "AIzaSyClk3aH3ga1-4hWQFnGe0Jb9G1fsSelJa4",
    authDomain: "kwitter-3f773.firebaseapp.com",
    projectId: "kwitter-3f773",
    storageBucket: "kwitter-3f773.appspot.com",
    messagingSenderId: "274720410666",
    appId: "1:274720410666:web:cd289ccc3c9e8469f44753"
  };

  const app = initializeApp(firebaseConfig);
   
  function addUser()
  {
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose :"adding user"
      });
      
  }