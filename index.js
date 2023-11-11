let homeScore = document.getElementById("home-score")
//console.log(homeScore)
let awayScore = document.getElementById("away-score")
//console.log(awayScore)

let home = 0
let away = 0

function home1() {
    home += 1
    homeScore.textContent = home
}

function home2() {
    home += 2
    homeScore.textContent = home    
}

function home3() {
    home += 3
    homeScore.textContent = home
}

function guest1() {
    away += 1
    awayScore.textContent = away
}

function guest2() {
    away += 2
    awayScore.textContent = away
}

function guest3() {
    away += 3
    awayScore.textContent = away
}

let recent = document.getElementById("recent")

function newGame() {
    recent.innerHTML += "<li>" + "Home: " + home + "; Away: " + away + "</li>"
    let newGameScore = "00"
    awayScore.textContent = newGameScore
    homeScore.textContent = newGameScore
    home = 0
    away = 0
}