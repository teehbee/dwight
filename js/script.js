//The object Dwight Schrute

var dwightSchrute = {
  name: "Dwight Kurt Schrute III",
  birthYear: 1970,
  isAnnoying: true,
  friendsWith: ["Michael Scott", "Jim Halpert", "Andy Bernard", "Pam Beesly"],
  position: "Assistant TO The Regional Manager",
  lives: {
    name: "Schrute Farms",
    location: "Scranton",
    employees: ["Dwight Kurt Schrute III", "Mose Schrute"],
    sizeInAcres: 1600,
    isAlsoMotel: true,
  },
};

console.log(dwightSchrute); 


var header = "Welcome to Dwight's Corner";

var headerContainer = document.querySelector(".main-header");
var nameContainer = document.querySelector(".name");
var bornContainer = document.querySelector(".born");
var annoyingContainer = document.querySelector(".annoying");
var friendsContainer = document.querySelector(".friends");
var positionContainer = document.querySelector(".position");
var nameOfFarmContainer = document.querySelector("#farm-name");
var nameOfFarmLocation = document.querySelector("#farm-location");
var nameOfFarmEmployees = document.querySelector("#farm-employees");
var sizeOfFarm = document.querySelector("#acres-farm");
var isItMotel = document.querySelector("#motel");

headerContainer.innerHTML = header;
nameContainer.innerHTML = dwightSchrute.name;
bornContainer.innerHTML = dwightSchrute.birthYear;
positionContainer.innerHTML = dwightSchrute.position;
nameOfFarmContainer.innerHTML = dwightSchrute.lives.name;
nameOfFarmLocation.innerHTML = dwightSchrute.lives.location;
nameOfFarmEmployees.innerHTML = dwightSchrute.lives.employees;
sizeOfFarm.innerHTML = dwightSchrute.lives.sizeInAcres;


//If else statement to determine if Dwight is annoying or not

if (dwightSchrute.isAnnoying === true) {
  annoyingContainer.innerHTML = "Yes!";
}

else {
  annoyingContainer.innerHTML ="False. Jim is the stupid one.";
};

//Loop for Dwight's friends

for (var i = 0; i < dwightSchrute.friendsWith.length; i++) {
  console.log(dwightSchrute.friendsWith[i]);

  var dwightsFriends = typeof dwightSchrute.friendsWith[i];

  console.log(dwightsFriends);

  if (dwightsFriends === "string") {
    friendsContainer.innerHTML = "Shockingly Yes!";
  }

  else (friendsContainer.innerHTML = "Of course not..." )
}

//If else statement about motel

if (dwightSchrute.lives.isAlsoMotel === true) {
  isItMotel.innerHTML = "Well of course!";
}

else {
  isItMotel.innerHTML = "No, find your own place to stay!";
}

//Button

const audio1 = new Audio("audio/beets.mp3");
const audio2 = new Audio("audio/michael.mp3");
const buttons1 = document.querySelectorAll("#button1");
const buttons2 = document.querySelectorAll("#button2");

buttons1.forEach(button => {
  button.addEventListener("click", () => {
    audio1.play();
  });
});

buttons2.forEach(button => {
  button.addEventListener("click", () => {
    audio2.play();
  });
});