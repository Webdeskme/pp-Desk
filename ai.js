var Ai = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function Ai ()
    {
        Phaser.Scene.call(this, {key: 'ai'});
    },

    preload: function ()
    {
      this.load.bitmapFont('topaz', 'assets/fonts/lato.png', 'assets/fonts/lato.xml');
      this.load.image('back', 'assets/backgrounds/star1.jpg');
      this.load.audio('click', [
      "assets/Audio/mouseclick.wav"
      ]);

    },

    create: function ()
    {
      this.add.image(512, 320, 'back');
      var sto = this.add.dom(512, 320).createFromHTML('<iframe width="560" height="315" src="Escape_The_AI-Pirates_Port.html" frameborder="0"></iframe>');
      sto.setScale(3/2);
      var hr = this.add.bitmapText(16, 16, 'topaz', 'Back', 32);
      hr.setInteractive({ useHandCursor: true  } );
      hr.on('pointerdown', () => {
        this.game.sound.stopAll();
        //this.scene.start('titles');
        window.location.href = "game.html";
      });
    }
});
var config = {
    type: Phaser.AUTO,
    scale: {
      mode: Phaser.Scale.FIT,
      parent: "app",
      width: 1024,
      height: 640,
      autoCenter: Phaser.Scale.CENTER_BOTH
    },
    dom: {
        createContainer: true
    },
    render: {
      clearBeforeRender: false
    },
    enableDebug: false,
    backgroundColor: '#000000',
    scene: [ Ai ]
};
var game = new Phaser.Game(config);
