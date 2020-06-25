let health = 100

let targetName = "Barney Stinson"

let hits = 0

function slap() {
  health--
  hits++
  update()
}

function punch() {
  health -= 5
  hits++
  update()
}

function kick() {
  health -= 10
  hits++
  update()
}

function update() {
  document.getElementById('health').innerText = `${health}`
  document.getElementById('hits').innerText = `${hits}`
  playagain()

}


function playagain() {

  if (health < 0) {
    
    reset()
  }

}

function reset() {
 let gamereset = confirm ("He's out!  Play again?")

 if (gamereset == true) {

  health = 100
  hits = 0
  update()
 }
}
