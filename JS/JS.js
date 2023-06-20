const canvas= document.querySelector("canvas")
const papan= canvas.getContext("2d")

const ASPECT_RATION={
WIDTH:16,
HEIGHT: 9
}
const DISPLAY_PIXEL ={
WIDTH:64,
HEIGHT:64
}

const playerSkin ={
    width:50,
    height:100,
    speed:3,
    color:"white",
    position:{
        x:100,
        y:0
    }
}

const player2Skin ={
    width:50,
    height:100,
    speed:3,
    color:"tomato", 
    position:{
        x:900,
        y:0
    }
    
}



canvas.width=DISPLAY_PIXEL.WIDTH * ASPECT_RATION.WIDTH
canvas.height=DISPLAY_PIXEL.HEIGHT * ASPECT_RATION.HEIGHT

const ground =new Ground('assets/bg.png',canvas.width,canvas.height)
const player= new Player(playerSkin)
const player2= new Player2(player2Skin)

//attack
 function attacking({player, player2}){
    return(
    player.attack.position.x + player.attack.width >= 
    player2.position.x && player.attack.position.x <= 
    player2.attack.position.x + player2.attack.width && 
    player.attack.position.y + player.height >= 
    player2.position.y && player.attack.position.y <= 
    player2.attack.position.y + player2.attack.height && 
    player.nyerang
    )
  }

//gameout
function penentuWiner({player,player2,timerId}){
  clearTimeout(timerId)
  document.querySelector('#displayText').style.display = 'flex'
  if(player.health === player2.health){
    document.querySelector('#displayText').innerHTML = 'Seri'
    }else if(player.health > player2.health){
        document.querySelector('#displayText').innerHTML = 'Player 1 Win'
    }else if(player.health < player2.health){
        document.querySelector('#displayText').innerHTML = 'Player 2 Win'
    }
}
//timer
let timer = 30
function waktuJalan(){
    timerId=setTimeout(waktuJalan, 1000)
    if(timer > 0){
        timer--
        document.querySelector('#timer').innerHTML = timer
    }
    if (timer === 0){        
        penentuWiner({player,player2})
    }
}
if(player.health === player2.health)

waktuJalan()
//pergerakan player
function animate(){
 
ground.create()
player.create()
player2.create()

player.animate()
player2.animate()
//Player 1n
window.requestAnimationFrame(animate)
window.addEventListener("keydown", function(callback){
    switch(callback.key){
        case"ArrowUp":
        player2.jump()
        break
        case"ArrowDown":
        player2.Serang()
        break
        case"ArrowLeft":
        player2.moveLeft()
        break
        case"ArrowRight":
        player2.moveRight()
        break
        default:
            break
        }
    })
    
 if(
  attacking ({
    player:player,
    player2:player2
  })&&
   player.nyerang
  ){
    player.nyerang= false
    player2.health -= 20
    document.querySelector('#health2').style.width = player2.health + '%'
    }

  if(
    attacking ({
      player:player2,
      player2:player
    })&&
  player2.nyerang
  ){
    player2.nyerang= false
    player.health -= 20
      document.querySelector('#health1').style.width = player.health + '%'
    }
    
    //end game jika health darah player
if(player.health <= 0 || player2.health <= 0){
  penentuWiner({player,player2,timerId})
}

  
}
//Player 2
    var x = window.innerWidth/2-130/2,
        y = window.innerHeight/2-130/2
window.addEventListener('keydown',press)
function press(e){
  if ( e.keyCode === 87 /* w */ ){
    player.jump()
  }
  if ( e.keyCode === 83 /* s */){
    player.Serang()
  }
  if ( e.keyCode === 68 /* d */){
    player.moveRight()
  }
  if (e.keyCode === 65 /* a */){
    player.moveLeft()
  }
}



animate()