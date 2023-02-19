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

const buff = document.getElementById("vary")
function buffFunc(){
  buff.innerText = "O is playing. WAIT!"
}

function reverseBuffFunc(){
  buff.innerText = "X's Turn. PLAY!"
}
  

function winner(){

}
let var1 = "player1"
let var2 = "player2"

function changeBtnOne(){
  btnone.innerText = var1
  dummy_one = 1
  playerTwo()
}

function changeBtnTwo(){
  btntwo.innerText = var1 
  dummy_two = 1
  playerTwo()
}
function changeBtnThree(){
  btnthree.innerText = var1
  dummy_three = 1
  playerTwo()
}
function changeBtnFour(){
  btnfour.innerText = var1
  dummy_four = 1
  playerTwo()
}
function changeBtnFive(){
  btnfive.innerText = var1
  dummy_five = 1
  playerTwo()
}
function changeBtnSix(){
  btnsix.innerText = var1
  dummy_six = 1
  playerTwo()
}
function changeBtnSeven(){
  btnseven.innerText = var1
  dummy_seven = 1
  playerTwo()
}
function changeBtnEight(){
  btneight.innerText = var1
  dummy_eight = 1
  playerTwo()
}
function changeBtnNine(){
  btnnine.innerText = var1
  dummy_nine = 1
  playerTwo()
}


function playerTwo(){
  buffFunc()
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

}

function caseOne(){
  btnone.innerText = var2
  if(dummy_one == 0){
  dummy_one = 1
  }
}

function caseTwo(){
  btntwo.innerText = var2
  if(dummy_two == 0){
  dummy_two = 1
  }
}

function caseThree(){
  btnthree.innerText = var2
  if(dummy_three == 0){
  dummy_three = 1
  }
}
function caseFour(){
  btnfour.innerText = var2
  if(dummy_four == 0){
  dummy_four = 1
  }
}
function caseFive(){
  btnfive.innerText = var2
  if(dummy_five == 0){
  dummy_five = 1
  }
}
function caseSix(){
  btnsix.innerText = var2
  if(dummy_six == 0){
  dummy_six = 1
  }
}
function caseSeven(){
  btnseven.innerText = var2
  if(dummy_seven == 0){
  dummy_seven = 1
  }
}
function caseEight(){
  btneight.innerText = var2
  if(dummy_eight == 0){
  dummy_eight = 1
  }
}
function caseNine(){
  btnnine.innerText = var2
  if(dummy_nine == 0){
  dummy_nine = 1
  }
}
