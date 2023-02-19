const btnone = document.getElementById("btn-1")
const btntwo = document.getElementById("btn-2")
const btnthree = document.getElementById("btn-3")
const btnfour = document.getElementById("btn-4")
const btnfive = document.getElementById("btn-5")
const btnsix = document.getElementById("btn-6")
const btnseven = document.getElementById("btn-7")
const btneight = document.getElementById("btn-8")
const btnnine = document.getElementById("btn-9")

let dummy_one = 0
let dummy_two = 0
let dummy_three = 0
let dummy_four = 0
let dummy_five = 0
let dummy_six = 0
let dummy_seven = 0
let dummy_eight = 0
let dummy_nine = 0



function changeBtnOne(){
  btnone.innerText = "player1"
  dummy_one = 1
  playerTwo()
}

function changeBtnTwo(){
  btntwo.innerText = "player1" 
  dummy_two = 1
  playerTwo()
}
function changeBtnThree(){
  btnthree.innerText = "player1"
  dummy_three = 1
  playerTwo()
}
function changeBtnFour(){
  btnfour.innerText = "player1"
  dummy_four = 1
  playerTwo()
}
function changeBtnFive(){
  btnfive.innerText = "player1"
  dummy_five = 1
  playerTwo()
}
function changeBtnSix(){
  btnsix.innerText = "player1"
  dummy_six = 1
  playerTwo()
}
function changeBtnSeven(){
  btnseven.innerText = "player1"
  dummy_seven = 1
  playerTwo()
}
function changeBtnEight(){
  btneight.innerText = "player1"
  dummy_eight = 1
  playerTwo()
}
function changeBtnNine(){
  btnnine.innerText = "player1"
  dummy_nine = 1
  playerTwo()
}


function playerTwo(){
  //this is the game dummy(AI lol)
  const x = Math.floor(Math.random() * 9) + 1
  console.log(x)

  if(x == 1 && dummy_one == 0){
    caseOne()
  }
  if(x == 2 && dummy_two == 0){
    caseTwo()
  }
  if(x == 3 && dummy_three == 0){
    caseThree()
  }
  if(x == 4 && dummy_four == 0){
    caseFour()
  }
  if(x == 5 && dummy_five == 0){
    caseFive()
  }
  if(x == 6 && dummy_six == 0){
    caseSix()
  }
  if(x == 7 && dummy_seven == 0){
    caseSeven()
  }
  if(x == 8 && dummy_eight == 0){
    caseEight()
  }
  if(x == 9 && dummy_nine == 0){
    caseNine()
  }else{
    console.log("error in compute!")
  }
}

function caseOne(){
  btnone.innerText = "player2"
}

function caseTwo(){
  btntwo.innerText = "player2"
}

function caseThree(){
  btnthree.innerText = "player2"
}
function caseFour(){
  btnfour.innerText = "player2"
}
function caseFive(){
  btnfive.innerText = "player2"
}
function caseSix(){
  btnsix.innerText = "player2"
}
function caseSeven(){
  btnseven.innerText = "player2"
}
function caseEight(){
  btneight.innerText = "player2"
}
function caseNine(){
  btn.innerText = "player2"
}
