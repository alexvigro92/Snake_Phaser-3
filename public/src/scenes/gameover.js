class Gameover extends Phaser.Scene {
  constructor(){
    super('Gameover')
  }
  preload(){
    console.log("I'm Gameover");
  }
  create(){
    this.scene.stop('UI')
    this.add.dynamicBitmapText(this.sys.game.config.width/2,this.sys.game.config.height/2 - 30,'pixel','GAME OVER',20).setOrigin(0.5)
    this.event = setTimeout(()=>{
      this.exitScene();
    },5000)
    this.input.keyboard.on('keydow_ENTER', () => {
      this.exitScene();
    });
    this.input.on('pointerdown', () => {
      this.exitScene();
    });

  }
  exitScene(){
    clearTimeout(this.event);
    this.scene.start('Menu')
  }
}

export default Gameover;
