let health = 100

let targetName = "Barney Stinson"

let hits = 0


function healthcheck() {
  if (health < 50 && health > 0) {
   let slap2 = document.getElementById('slap-img')
   slap2.src = "/slap2.jpg"

  } else if (health <= 0) {
    let slap3 = document.getElementById('slap-img')
    slap3.src = "/slap.gif"
  } else {let slap = document.getElementById('slap-img')
  slap.src = "/slap.jpg"
  }

}


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
  healthcheck()
  

  
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
