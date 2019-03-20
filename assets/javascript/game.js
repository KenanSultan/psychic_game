let arr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
let winsDis = document.querySelector("#win")
let losesDis = document.querySelector("#lose")
let leftDis = document.querySelector("#left")
let lettersDis = document.querySelector("#letters")

let wins = 0
let loses = 0

next()

window.onkeypress = keyCatch

function keyCatch(event) {
    var playerChoise = (String.fromCharCode(event.keyCode)).toLowerCase()
    if(playerChoise !== compChoise){
        left--
        leftDis.innerHTML = left
        lettersDis.innerHTML += playerChoise+", "
        if(left===0){
            loses++
            next()
        }
    }else{
        wins++
        next()
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

}