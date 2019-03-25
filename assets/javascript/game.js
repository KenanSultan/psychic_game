let arr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
let chosen = []
let winsDis = document.querySelector("#win")
let losesDis = document.querySelector("#lose")
let leftDis = document.querySelector("#left")
let lettersDis = document.querySelector("#letters")

let wins = 0
let loses = 0
let ffl = false

next()

window.onkeypress = keyCatch

function keyCatch(event) {
    var playerChoise = (String.fromCharCode(event.keyCode)).toLowerCase()
    if(arr.indexOf(playerChoise) !== -1){
        if(chosen.indexOf(playerChoise) === -1 && playerChoise !== compChoise){
            chosen.push(playerChoise)
            left--
            leftDis.innerHTML = left
            if(ffl){
                lettersDis.innerHTML += ", " + playerChoise
            } 
            else{
                lettersDis.innerHTML += playerChoise
                ffl = true
            }
            if(left===0){
                loses++
                next()
            }
        }else if(playerChoise === compChoise){
            wins++
            next()
        }
    } 
}

function next(){
    compChoise = arr[Math.floor(Math.random()*arr.length)]
    console.log(compChoise)
    left=9
    winsDis.innerHTML = wins
    losesDis.innerHTML = loses
    leftDis.innerHTML = left
    lettersDis.innerHTML = ""
    ffl = false
    chosen = []
}