// this  is just test
/* This code was and is still currently authored by https://github.com/enchanted-coder/ */
// development branch has been added and may commit from another machine

// defining our variables and linking them to our html document
const btnone = document.getElementById("btn-1")
const btntwo = document.getElementById("btn-2")
const btnthree = document.getElementById("btn-3")
const btnfour = document.getElementById("btn-4")
const btnfive = document.getElementById("btn-5")
const btnsix = document.getElementById("btn-6")
const btnseven = document.getElementById("btn-7")
const btneight = document.getElementById("btn-8")
const btnnine = document.getElementById("btn-9")

// variables that will be used in our if statements. 
// it is important to define them one by one
let dummy_one = 0
let dummy_two = 0
let dummy_three = 0
let dummy_four = 0
let dummy_five = 0
let dummy_six = 0
let dummy_seven = 0
let dummy_eight = 0
let dummy_nine = 0

// to let us know who the current player is: 
const buff = document.getElementById("vary")
function buffFunc(){
  buff.innerText = "O is playing. WAIT!"
}

function reverseBuffFunc(){
  buff.innerText = "X's Turn. PLAY!"
}
  

// variables to place X and O on the screen
let var1 = "X"
let var2 = "O"

// functions to display on screen changes.
function changeBtnOne(){
  buffFunc()
  btnone.innerText = var1
  dummy_one = 1
  ourTimeout()
}

function changeBtnTwo(){
  buffFunc()
  btntwo.innerText = var1 
  dummy_two = 1
  ourTimeout()
}
function changeBtnThree(){
  buffFunc()
  btnthree.innerText = var1
  dummy_three = 1
  ourTimeout()
}
function changeBtnFour(){
  buffFunc()
  btnfour.innerText = var1
  dummy_four = 1
  ourTimeout()
}
function changeBtnFive(){
  buffFunc()
  btnfive.innerText = var1
  dummy_five = 1
  ourTimeout()
}
function changeBtnSix(){
  buffFunc()
  btnsix.innerText = var1
  dummy_six = 1
  ourTimeout()
}
function changeBtnSeven(){
  buffFunc()
  btnseven.innerText = var1
  dummy_seven = 1
  ourTimeout()
}
function changeBtnEight(){
  buffFunc()
  btneight.innerText = var1
  dummy_eight = 1
  ourTimeout()
}
function changeBtnNine(){
  buffFunc()
  btnnine.innerText = var1
  dummy_nine = 1
  ourTimeout()
}

function ourTimeout(){

// setTimeout() gives a 1 second delay for the AI to play. lol not really AI but your get what i mean
setTimeout(
  function playerTwo(){
  //this is the game dummy(AI lol)
  const x = Math.floor(Math.random() * 9) + 1
  console.log(x)
  
  if(x == 1 && dummy_one == 0){
    caseOne()
  }else if( x == 2 && dummy_two == 0){
    caseTwo()
  }else if( x == 3 && dummy_three == 0){
    caseThree()
  }else if(x == 4 && dummy_four == 0){
    caseFour()
  }else if(x == 5 && dummy_five == 0){
    caseFive()
  }else if(x == 6 && dummy_six == 0){
    caseSix()
  }else if(x == 7 && dummy_seven == 0){
    caseSeven()
  }else if(x == 8 && dummy_eight == 0){
    caseEight()
  }else if(x == 9 && dummy_nine == 0){
    caseNine()
  }else{
    console.log("loop detected...trying again")
    playerTwo()
  }

},
1000)

}

// this get executed for playerTwo()
function caseOne(){
  btnone.innerText = var2
  if(dummy_one == 0){
  dummy_one = 1
  }
  reverseBuffFunc()
}

function caseTwo(){
  btntwo.innerText = var2
  if(dummy_two == 0){
  dummy_two = 1
  }
  reverseBuffFunc()
}

function caseThree(){
  btnthree.innerText = var2
  if(dummy_three == 0){
  dummy_three = 1
  }
  reverseBuffFunc()
}
function caseFour(){
  btnfour.innerText = var2
  if(dummy_four == 0){
  dummy_four = 1
  }
  reverseBuffFunc()
}
function caseFive(){
  btnfive.innerText = var2
  if(dummy_five == 0){
  dummy_five = 1
  }
  reverseBuffFunc()
}
function caseSix(){
  btnsix.innerText = var2
  if(dummy_six == 0){
  dummy_six = 1
  }
  reverseBuffFunc()
}
function caseSeven(){
  btnseven.innerText = var2
  if(dummy_seven == 0){
  dummy_seven = 1
  }
  reverseBuffFunc()
}
function caseEight(){
  btneight.innerText = var2
  if(dummy_eight == 0){
  dummy_eight = 1
  }
  reverseBuffFunc()
}
function caseNine(){
  btnnine.innerText = var2
  if(dummy_nine == 0){
  dummy_nine = 1
  }
  reverseBuffFunc()
}



// Game Logic starts here.
// keep in mind that we also need a smart playertwo. so code that after


const winLog = () => {

  return
}
