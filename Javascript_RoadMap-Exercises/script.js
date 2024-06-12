// This is how we create an object

const person = {
    name: "Enock",
    place: "Kigali-Rwanda",
    age: 23,
    maritalStatus: "single"
  };
  
  // after you have initialized the object you can access it using either . notation or black notation like this
  
  console.log(person.name) // you will see string Enock in your console
  // try out even other properties.
  
  
  // Objects allows us to store variables and make our code more cleaner.
  
  // example one here we are creating variables and nitialize them one by
  const playerOneName = "tim";
  const playerTwoName = "jenn";
  const playerOneMarker = "X";
  const playerTwoMarker = "O";
  
  // example two, we are try separete player one and player two, increasing the readablity of our codes.
  const playerOne = {
    name: "tim",
    marker: "X"
  };
  
  const playerTwo = {
    name: "jenn",
    marker: "O"
  };
  
  // now, let us try to access the players name using function to access those objects.

  // this function is taking player as argument.

  function printName(player){
    return player.name
  }
  console.log(printName(playerOne));  // The answer should be tim
  console.log(printName(playerTwo));  // The answer should be jenn


//   let us that we don't now the name of the player

function printName(winningplayer){

    return `Congratulation, ${winningplayer.name} is the winner! `;
   
  }
  console.log(printName(playerOne));  // The answer should be tim
  console.log(printName(playerTwo));  // The answer should be jenn


//   later on we might want to add some other players properties, so it is good ideas to create an object contract which other objects will rely on.

// object contractor is declared as variable

class player {
    constructor(name, marker, age) {
        this.name = name; // we are using this key word to refer to the properties we want our instances to rely one.
        this.marker = marker;
        this.age = age;
        // our last exerceise codes:
        this.callAge = function() {
            console.log(this.age);
        }
    }
};

const player1 = new player('Enock', 'X', 23);
const player2 = new player('Robben', 'R', 24);
// we can create as many as objects we want as long we have the main controctor we are referring too.

console.log((player1.name));  // You should see Enock.

//  We are closing this page. let create a new prority called age and give it value of 23, after add a function in that consitructor that call this property when function called.

player1.callAge(); // this logs, 23