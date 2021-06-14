  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAvf9JIdoiYCxEzlTbMb02QenVQU0KUOu4",
    authDomain: "project-94-68773.firebaseapp.com",
    projectId: "project-94-68773",
    storageBucket: "project-94-68773.appspot.com",
    messagingSenderId: "899258935548",
    appId: "1:899258935548:web:c9c60c99a3893672f0cf79",
    measurementId: "G-X8MZYC5357"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
  user_name = localStorage.getItem("user_name");


  document.getElementById("username").innerHTML = "Welcome " + user_name + "!";
      
  function addRoom(){
    room_name = document.getElementById("roomname").value;
    firebase.database().ref("/").child(room_name).update({
      purpose: "Adding Room Name"
    });

    window.location = "Kwitter_page.html";


}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey =
childSnapshot.key;
 Room_names = childKey;
 //Start code
         row = "<div class='room_name' id="+Room_names+" onclick='redirecttoRoomName(this.id)' >#" + Room_names +" </div></hr>";
         document.getElementById("output").innerHTML += row;
 //End code
         console.log("Room Name- ", Room_names);
 });});}

 function redirecttoRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}