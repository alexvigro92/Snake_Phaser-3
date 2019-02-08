import Bootloader from './bootloader.js'
import Play from './scenes/play.js'
import Gameover from './scenes/gameover.js'
import UI from './scenes/UI.js'
import Menu from './scenes/menu.js'

const config = {
  title: 'Snake', //titulo
  width: 320, //ancho
  height: 180, //alto
  type: Phaser.AUTO, //poder ejecutar con canvas u opengl
  parent: 'container', //el contenedor en donde entrará
  backgroundColor: '#f9ca24', //el backgroun color del juego
  pixelArt: true,
  physics: {
    default:"arcade",
    // arcade:{
    //   gravity:{y:100}
    // }
  },
  scene: [Bootloader,Play,Gameover,UI,Menu],
}

new Phaser.Game(config);
