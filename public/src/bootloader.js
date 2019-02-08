class Bootloader extends Phaser.Scene {

  constructor(){
    super('Bootloader')
  }

  init(){
    console.log("I'm init");
  }

  preload(){
    console.log("Soy Bootloader");
    this.load.image('cuerpo','./assets/body.png')
    this.load.image('comida','./assets/food.png')
    this.load.image('tablero','./assets/tablero.png')

    this.load.json('fontJSON','./assets/font/font.json')
    this.load.image('font','./assets/font/font.png')

    this.load.on('complete',() => {//esta funcion se llama cuando se cargaron todos los assets
      const fontJSON = this.cache.json.get('fontJSON');
      this.cache.bitmapFont.add('pixel', Phaser.GameObjects.RetroFont.Parse(this,fontJSON));
      this.scene.start('Menu');
    })
  }

  update(){
    console.log("I'm update");
  }

  create(){ //esta funcion se llama cuando se cargaron todos los assets
  }
}

export default Bootloader;
