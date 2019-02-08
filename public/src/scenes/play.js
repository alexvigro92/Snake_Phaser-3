import Snake from '../gameobjects/Snake.js'
import Food from '../gameobjects/Food.js'

class Play extends Phaser.Scene {
  constructor(){
    super('Play')
  }
  preload(){
    console.log("Soy play");
    this.snake = new Snake(this);
    this.food = new Food(this);
    // this.add.image(10,10,'cuerpo')//asi ponemos las imagenes en el canvas
  }

  create(){

    this.scene.launch('UI');
    const sceneUI = this.scene.get('UI')

    this.input.keyboard.on('keydown_RIGHT', () => {
      this.snake.changeMov('derecha')
    })
    this.input.keyboard.on('keydown_LEFT', () => {
      this.snake.changeMov('izquierda')
    })
    this.input.keyboard.on('keydown_UP', () => {
      this.snake.changeMov('arriba')
    })
    this.input.keyboard.on('keydown_DOWN', () => {
      this.snake.changeMov('abajo')
    })

    this.physics.add.collider(this.snake.cuerpo[0],this.food.food, () => {
      this.food.createFood();
      this.snake.grow();
      sceneUI.addPoints();
    })
  }

  update(time){
    this.snake.update(time);
  }
}

export default Play;
