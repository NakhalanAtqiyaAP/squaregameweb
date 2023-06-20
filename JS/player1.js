class Player{
    constructor(props) {
        this.width= props.width
        this.height= props.height
        this.speed= props.speed
        this.color= props.color
        this.position= {
            x: props.position.x,
            y: props.position.y
        }
        this.attack={
            position:this.position,
            width:100,
            height:5,
           
        }
        this.nyerang
        this.health = 100
        this.velocity ={
            x:0,
            y:0,
        }
        this.heightJump= 100
        this.gravity=0.5

        
}
/*cara agar membuat object player move adalah menggunakan rumus (2*g*j) */

jump(){
   return this.velocity.y = -Math.sqrt(2 * this.gravity * 
        this.heightJump)
}
Serang() {
        this.nyerang= true,
        setTimeout(() => {
          this.nyerang= false  
        }, 100)
    }
moveRight(){
    this.velocity.x = 1 * this.speed
}
moveLeft(){
    this.velocity.x = -1 * this.speed
} 

animate(){
  if(this.nyerang){
    papan.fillStyle=this.color
    papan.fillRect(this.attack.position.x, this.attack.position.y,
        this.attack.width, this.attack.height,)
    }

    const ground =canvas.height - this.height
    const rightWall = canvas.width - this.width

    this.velocity.y += this.gravity
    this.position.x += this.velocity.x
    this.position.y += this.velocity.y

  
    if(player.position.y > ground){
        this.position.y =ground
        this.jump()
    }  

if(this.position.x < 0){
    this.velocity.x *= -1
}

if(this.position.x > rightWall){
    this.velocity.x *= -1
}  

}

create(){
    papan.fillStyle= this.color
    papan.fillRect(this.position.x, this.position.y, this.width, this.height)
}
}