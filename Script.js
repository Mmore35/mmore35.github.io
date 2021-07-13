import firebase from 'firebase/app';
import 'firebase/firestore';

var database = firebase.database();

function coordinatesFunc(event) {
    var xcor = event.clientX;
    var ycor = event.clientY;
    
    
}

var div = 
        document.querySelector(".RGBThing");
  
    div.addEventListener(
        "mousemove", function (e) {
        x = e.offsetX;
        y = e.offsetY;
        div.style.backgroundColor 
            = `rgb(${x}, ${y}, ${x - y})`;
    });

    function update(e){
        var x = e.clientX || e.touches[0].clientX
        var y = e.clientY || e.touches[0].clientY
      
        document.documentElement.style.setProperty('--cursorX', x + 'px')
        document.documentElement.style.setProperty('--cursorY', y + 'px')
      }
      
      document.addEventListener('mousemove',update)
      document.addEventListener('touchmove',update)
      
    function writeUserData(userId, name, email) {
        firebase.database().ref('users/' + userId).set({
          username: name,
          email: email
        });
    }

    function WriteUserData() {
        firebase.database().ref('users/' + "Ofubt9pQMoK8PY03ZE5J").set({
          UserName: "Mike"
        });
    }
    WriteUserData();
    var citiesRef = db.collection("cities");

citiesRef.doc("SF").set({
    name: "San Francisco", state: "CA", country: "USA",
    capital: false, population: 860000,
    regions: ["west_coast", "norcal"] });
citiesRef.doc("LA").set({
    name: "Los Angeles", state: "CA", country: "USA",
    capital: false, population: 3900000,
    regions: ["west_coast", "socal"] });
citiesRef.doc("DC").set({
    name: "Washington, D.C.", state: null, country: "USA",
    capital: true, population: 680000,
    regions: ["east_coast"] });
citiesRef.doc("TOK").set({
    name: "Tokyo", state: null, country: "Japan",
    capital: true, population: 9000000,
    regions: ["kanto", "honshu"] });
citiesRef.doc("BJ").set({
    name: "Beijing", state: null, country: "China",
    capital: true, population: 21500000,
    regions: ["jingjinji", "hebei"] });