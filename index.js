var Intro = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function Intro ()
    {
        Phaser.Scene.call(this, { key: 'intro' });
    },
    preload: function ()
    {
      this.load.audio('click', [
      "assets/Audio/mouseclick.wav"
      ]);
      this.load.image('backint', 'assets/backgrounds/black.png');
      this.load.image('sans', 'assets/backgrounds/sans.png');
      this.load.image('logo', 'assets/Text/logo.png');
      this.load.image('musicOff', 'assets/icons/sound-off.png');
      this.load.image('musicOn', 'assets/icons/sound-on.png');
      this.load.image('full', 'assets/icons/expand.png');
      this.load.audio('music', [
      "assets/Audio/MyVeryOwnDeadShip.mp3"
      ]);
      this.load.video('intro', 'assets/Video/PiratePortTrailer.mp4');
    },

    create: function ()
    {
      var z = "No";
      this.game.sound.stopAll();
      //m = this.sound.add('music');
      //m.loop = true;
      //m.play();
      var tween;
      var image;
      var fromColors;
      var toColors;
      function getRandomVertexColors ()
{
    // Create a random color for each vertex.
    // RandomRGB returns a Phaser.Display.Color object with random RGB values.
    var RandomRGB = Phaser.Display.Color.RandomRGB;
    return {
        topLeft: RandomRGB(),
        topRight: RandomRGB(),
        bottomLeft: RandomRGB(),
        bottomRight: RandomRGB()
    };
}

function getTintColor (vertex)
{

    // Interpolate between the fromColor and toColor of the current vertex,
    // using the current tween value.
    var tint = Phaser.Display.Color.Interpolate.ColorWithColor(
        fromColors[vertex],
        toColors[vertex],
        100,
        tween.getValue()
    );

    // Interpolate.ColorWithColor returns a Javascript object with
    // interpolated RGB values. We convert it to a Phaser.Display.Color object
    // in order to get the integer value of the tint color.
    return Phaser.Display.Color.ObjectToColor(tint).color;
}
function tintTween (fromColors, toColors, callback)
{
    tween = this.tweens.addCounter({
        from: 0,
        to: 100,
        duration: 2000,
        onUpdate: function ()
        {
            image.setTint(
                getTintColor('topLeft'),
                getTintColor('topRight'),
                getTintColor('bottomLeft'),
                getTintColor('topRight')
            );
        },
        onComplete: callback
    });
}

function initTweens ()
{
    fromColors = toColors || fromColors;
    toColors = getRandomVertexColors();
    tintTween(
        fromColors,
        toColors,
        initTweens
    );
}
      backint = this.add.image(512, 320, 'backint');
      image = this.add.image(512, 160, 'sans');
      logo = this.add.image(700, 580, 'logo').setInteractive({ useHandCursor: true  } );
      image.setScale(1/2);
      logo.setScale(1/1);
      logo.on('pointerover',function(pointer){
        logo.setScale(3/2);
      });
      logo.on('pointerout',function(pointer){
        logo.setScale(1/1);
      });
      logo.on('pointerdown', () => {
        //m.stop();
        if(z == 'yes'){
          this.game.sound.stopAll();
          //this.scene.start('titles');
          window.location.href = "game.html";
        }
        else{
        z = 'yes';
        this.sound.add('click').play();
        var vid = this.add.video(487, 270, 'intro').setInteractive({ useHandCursor: true  } );
        vid.setScale(1/2);

       vid.play(true);

       vid.on('pointerdown', () => {
         this.sound.add('click').play();
         this.game.sound.stopAll();
         var id = window.setTimeout(function() {}, 0);

          while (id--) {
              window.clearTimeout(id); // will do nothing if no timeout with id is present
          }
         //this.scene.start('titles');
         window.location.href = "game.html";
       });

       // Prevents video freeze when game is out of focus (i.e. user changes tab on the browser)
       vid.setPaused(false);
       setTimeout(() => {
         this.game.sound.stopAll();
         //this.scene.start('titles');
         window.location.href = "game.html";
       }, 72000);
     }
      });
      var pre = this.add.text(100, 400, 'presents', { fontSize: '64px', fill: '#fff' });
      fromColors = getRandomVertexColors();

    image.setTint(
        fromColors.topLeft.color,
        fromColors.topRight.color,
        fromColors.bottomLeft.color,
        fromColors.bottomRight.color
    );

    // Bind the scope to tintTween so we can use this.tweens inside it.
    tintTween = tintTween.bind(this);

    initTweens();
    this.cameras.main.fadeIn(6000);

    let colorIndex = 0;
        const spectrum = Phaser.Display.Color.ColorSpectrum(128);

        let radius = 128;
        let intensity = 1;
        let attenuation = 0.1;

        let light = this.add.pointlight(400, 300, 0, radius, intensity);

        let color = spectrum[colorIndex];

        light.color.setTo(color.r, color.g, color.b);

    this.input.on('pointermove', function (pointer) {

        light.x = pointer.x;
        light.y = pointer.y;

    });
    fu = this.add.image(1000, 25, 'full').setInteractive({ useHandCursor: true  } );
    fu.setScale(1/16);
    fu.on('pointerdown', () => {
      if (this.scale.isFullscreen)
        {

            this.scale.stopFullscreen();
        }
        else
        {

            this.scale.startFullscreen();
        }
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
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    render: {
      clearBeforeRender: false
    },
    enableDebug: false,
    backgroundColor: '#000000',
    scene: [ Intro ]
};
var game = new Phaser.Game(config);
