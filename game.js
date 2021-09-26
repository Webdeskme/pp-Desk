var Vide = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function Vide ()
    {
        Phaser.Scene.call(this, { key: 'vide' });
    },

    preload: function ()
    {
      this.load.video('intro', 'assets/Video/PiratePortTrailer.mp4', 'loadeddata', false, false);
      this.load.audio('click', [
      "assets/Audio/mouseclick.wav"
      ]);

    },

    create: function ()
    {
      this.game.sound.stopAll();
      //game.scale.startFullscreen();
     var vid = this.add.video(512, 320, 'intro').setInteractive({ useHandCursor: true  } );
     vid.setScale(11/20);

    vid.play(true);

    vid.on('pointerdown', () => {
      this.sound.add('click').play();
      this.game.sound.stopAll();
      this.scene.start('titles');
    });

    // Prevents video freeze when game is out of focus (i.e. user changes tab on the browser)
    vid.setPaused(false);
    setTimeout(() => {
      this.game.sound.stopAll();
      this.scene.start('titles');
    }, 72000);
  }
});
var Puzz = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function Puzz ()
    {
        Phaser.Scene.call(this, { key: 'puzz' });
    },

    preload: function ()
    {
      var pp = ['sans1', 'sans2', 'sans3', 'sans4', 'sans5', 'sans6', 'sans7', 'sans8', 'sans9', 'sans10', 'sans11', 'sans12', 'sans13', 'sans14', 'sans15', 'sans16'];
      for (let i = 0; i < pp.length; i++) {
        this.load.image(pp[i], 'assets/puzzle/' + pp[i] + '.png');
      }
      this.load.image('back', 'assets/backgrounds/star1.jpg');
      this.load.audio('click', [
      "assets/Audio/mouseclick.wav"
      ]);

    },

    create: function ()
    {
      function shuffle(array) {
          var currentIndex = array.length, temporaryValue, randomIndex;

          // While there remain elements to shuffle...
          while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
          }

          return array;
          }
      this.game.sound.stopAll();
      this.add.image(512, 320, 'back');
      var pp = ['sans1', 'sans2', 'sans3', 'sans4', 'sans5', 'sans6', 'sans7', 'sans8', 'sans9', 'sans10', 'sans11', 'sans12', 'sans13', 'sans14', 'sans15', 'sans16'];
      shuffle(pp);
      var i;
      for (let i = 0; i < pp.length; i++) {
        //var cc = this.add.image(512, 320, 'sans1').setInteractive({ useHandCursor: true  } );
        var cc = this.add.image(512, 320, pp[i]).setInteractive({ draggable: true , useHandCursor: true } );
        //cc.setScale(1/2);
        this.input.setDraggable(cc);
      }
      this.input.on('drag', function (pointer, gameObject, dragX, dragY) {

        gameObject.x = dragX;
        gameObject.y = dragY;

    });
      //var hr = this.add.text(16, 16, 'Back', { fontSize: '32px', fill: '#fff' });
      var hr = this.add.bitmapText(16, 16, 'topaz', 'Back', 32).setScrollFactor(0,0);
      hr.setInteractive({ useHandCursor: true  } );
      hr.on('pointerdown', () => {
        this.game.sound.stopAll();
        this.scene.start('titles');
      });
  }
});
var Cred = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function Cred ()
    {
        Phaser.Scene.call(this, { key: 'cred' });
    },

    preload: function ()
    {
      this.load.video('cr', 'assets/Video/credits.mp4', 'loadeddata', false, false);
      this.load.audio('click', [
      "assets/Audio/mouseclick.wav"
      ]);

    },

    create: function ()
    {
      this.game.sound.stopAll();
      //game.scale.startFullscreen();
     var vid1 = this.add.video(512, 320, 'cr').setInteractive({ useHandCursor: true  } );
     vid1.setScale(11/20);

    vid1.play(true);

    vid1.on('pointerdown', () => {
      this.sound.add('click').play();
      this.game.sound.stopAll();
      this.scene.start('titles');
    });

    // Prevents video freeze when game is out of focus (i.e. user changes tab on the browser)
    vid1.setPaused(false);
    setTimeout(() => {
      this.game.sound.stopAll();
      this.scene.start('titles');
    }, 183000);
  }
});
var TitleS = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function TitleS ()
    {
        Phaser.Scene.call(this, { key: 'titles' });
    },

    preload: function ()
    {
        var cards = ["Browser", "Malware", "PrivilegeEsc", "Driver", "Service", "CloudStorage", "IMDS", "MFA", "User", "CloudAccount", "CredStuffing", "Kubelet", "WateringHole", "WebShell", "FakeInstaller", "OfficeMacro", "ShadowCopy", "Sysmon", "Behavior", "DPAT", "Endpoint", "SIEM", "Sinkhole", "ZeroTrust", "IAM", "SRUM", "MFAB"];
         this.load.bitmapFont('topaz', 'assets/fonts/lato.png', 'assets/fonts/lato.xml');
        //this.load.bitmapFont('interfont');
        //this.load.image('back', 'assets/backgrounds/star1.jpg');
        this.load.image('title', 'assets/Text/text.png');
        this.load.image('puzzle', 'assets/Text/puzzle.png');
        this.load.image('videol', 'assets/Text/video.png');
        this.load.image('story', 'assets/Text/story.png');
        this.load.image('credits', 'assets/Text/credits.png');
        this.load.image('sa', 'assets/Text/sans.png');
        this.load.image('aii', 'assets/Text/ai.png');
        this.load.image('cb', 'assets/out/back.png');
        var i;
        for (i = 0; i < cards.length; i++) {
          this.load.image(cards[i], 'assets/out/' + cards[i] + '.png');
        }
        this.load.audio('click', [
        "assets/Audio/mouseclick.wav"
        ]);
        this.load.audio('aatitle', [
        "assets/Audio/title.mp3"
        ]);
        this.load.audio('mwin', [
        "assets/Audio/Space++_By_Alex_McCulloch.mp3"
      ]);
        this.load.image('background', 'assets/space/nebula.jpg');
        this.load.image('stars', 'assets/space/stars.png');
        this.load.atlas('space', 'assets/space/space.png', 'assets/space/space.json');

    },

    create: function ()
    {
      this.game.sound.stopAll();
      var Bullet = new Phaser.Class({

        Extends: Phaser.Physics.Arcade.Image,

        initialize:

        function Bullet (scene)
        {
            Phaser.Physics.Arcade.Image.call(this, scene, 0, 0, 'space', 'blaster');

            this.setBlendMode(1);
            this.setDepth(1);

            this.speed = 1000;
            this.lifespan = 1000;

            this._temp = new Phaser.Math.Vector2();
        },

        fire: function (ship)
        {
            this.lifespan = 1000;

            this.setActive(true);
            this.setVisible(true);
            // this.setRotation(ship.rotation);
            this.setAngle(ship.body.rotation);
            this.setPosition(ship.x, ship.y);
            this.body.reset(ship.x, ship.y);

            // ship.body.advancePosition(10, this._temp);

            // this.setPosition(this._temp.x, this._temp.y);
            // this.body.reset(this._temp.x, this._temp.y);

            //  if ship is rotating we need to add it here
            // var a = ship.body.angularVelocity;

            // if (ship.body.speed !== 0)
            // {
            //     var angle = Math.atan2(ship.body.velocity.y, ship.body.velocity.x);
            // }
            // else
            // {
                var angle = Phaser.Math.DegToRad(ship.body.rotation);
            // }

            // this.body.world.velocityFromRotation(angle, this.speed + ship.body.speed, this.body.velocity);
            this.scene.physics.velocityFromRotation(angle, this.speed, this.body.velocity);

            this.body.velocity.x *= 2;
            this.body.velocity.y *= 2;
        },

        update: function (time, delta)
        {
            this.lifespan -= delta;

            if (this.lifespan <= 0)
            {
                this.setActive(false);
                this.setVisible(false);
                this.body.stop();
            }
        }

    });

    //  Prepare some spritesheets and animations

    /*this.textures.addSpriteSheetFromAtlas('mine-sheet', { atlas: 'space', frame: 'mine', frameWidth: 64 });
    this.textures.addSpriteSheetFromAtlas('asteroid1-sheet', { atlas: 'space', frame: 'asteroid1', frameWidth: 96 });
    this.textures.addSpriteSheetFromAtlas('asteroid2-sheet', { atlas: 'space', frame: 'asteroid2', frameWidth: 96 });
    this.textures.addSpriteSheetFromAtlas('asteroid3-sheet', { atlas: 'space', frame: 'asteroid3', frameWidth: 96 });
    this.textures.addSpriteSheetFromAtlas('asteroid4-sheet', { atlas: 'space', frame: 'asteroid4', frameWidth: 64 });

    this.anims.create({ key: 'mine-anim', frames: this.anims.generateFrameNumbers('mine-sheet', { start: 0, end: 15 }), frameRate: 20, repeat: -1 });
    this.anims.create({ key: 'asteroid1-anim', frames: this.anims.generateFrameNumbers('asteroid1-sheet', { start: 0, end: 24 }), frameRate: 20, repeat: -1 });
    this.anims.create({ key: 'asteroid2-anim', frames: this.anims.generateFrameNumbers('asteroid2-sheet', { start: 0, end: 24 }), frameRate: 20, repeat: -1 });
    this.anims.create({ key: 'asteroid3-anim', frames: this.anims.generateFrameNumbers('asteroid3-sheet', { start: 0, end: 24 }), frameRate: 20, repeat: -1 });
    this.anims.create({ key: 'asteroid4-anim', frames: this.anims.generateFrameNumbers('asteroid4-sheet', { start: 0, end: 23 }), frameRate: 20, repeat: -1 });
*/

    //  World size is 8000 x 6000 width: 1024,height: 640

    bg = this.add.tileSprite(400, 300, 1400, 800, 'background').setScrollFactor(0);

    //  Add our planets, etc

    this.add.image(512, 680, 'space', 'blue-planet').setOrigin(0).setScrollFactor(0.6);
    this.add.image(2833, 1246, 'space', 'brown-planet').setOrigin(0).setScrollFactor(0.6);
    this.add.image(3875, 531, 'space', 'sun').setOrigin(0).setScrollFactor(0.6);
    var galaxy = this.add.image(5345 + 1024, 327 + 1024, 'space', 'galaxy').setBlendMode(1).setScrollFactor(0.6);
    this.add.image(908, 3922, 'space', 'gas-giant').setOrigin(0).setScrollFactor(0.6);
    this.add.image(3140, 2974, 'space', 'brown-planet').setOrigin(0).setScrollFactor(0.6).setScale(0.8).setTint(0x882d2d);
    this.add.image(6052, 4280, 'space', 'purple-planet').setOrigin(0).setScrollFactor(0.6);

    for (var i = 0; i < 8; i++)
    {
        this.add.image(Phaser.Math.Between(0, 8000), Phaser.Math.Between(0, 6000), 'space', 'eyes').setBlendMode(1).setScrollFactor(0.8);
    }

    stars = this.add.tileSprite(400, 300, 800, 600, 'stars').setScrollFactor(0);

    var particles = this.add.particles('space');

    var emitter = particles.createEmitter({
        frame: 'blue',
        speed: 100,
        lifespan: {
            onEmit: function (particle, key, t, value)
            {
                return Phaser.Math.Percent(ship.body.speed, 0, 300) * 2000;
            }
        },
        alpha: {
            onEmit: function (particle, key, t, value)
            {
                return Phaser.Math.Percent(ship.body.speed, 0, 300);
            }
        },
        angle: {
            onEmit: function (particle, key, t, value)
            {
                var v = Phaser.Math.Between(-10, 10);
                return (ship.angle - 180) + v;
            }
        },
        scale: { start: 0.6, end: 0 },
        blendMode: 'ADD'
    });

    bullets = this.physics.add.group({
        classType: Bullet,
        maxSize: 30,
        runChildUpdate: true
    });

    ship = this.physics.add.image(7000, 3000, 'space', 'ship').setDepth(2);

    //ship.setInteractive({ draggable: true , useHandCursor: true } )
    //this.input.setDraggable(ship);
    ship.setDrag(300);
    ship.setAngularDrag(400);
    ship.setMaxVelocity(600);

    emitter.startFollow(ship);

    this.cameras.main.startFollow(ship);

    cursors = this.input.keyboard.createCursorKeys();
    fire = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    //touch = this.input.setDraggable(ship);

    //this.add.sprite(4300, 3000).play('asteroid1-anim');

    this.tweens.add({
        targets: galaxy,
        angle: 360,
        duration: 100000,
        ease: 'Linear',
        loop: -1
    });

      //////////////////////////////////////////////////////////////
      mobile = "yes";
      this.sound.add('aatitle').play();
      endm = this.sound.add('mwin', {volume: 0.25});
      //endm.loop = true;
      endm.play();
      //this.scale.startFullscreen();
      function shuffle(array) {
          var currentIndex = array.length, temporaryValue, randomIndex;

          // While there remain elements to shuffle...
          while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
          }

          return array;
          }
        var cards = ["Browser", "Malware", "PrivilegeEsc", "Driver", "Service", "CloudStorage", "IMDS", "MFA", "User", "CloudAccount", "CredStuffing", "Kubelet", "WateringHole", "WebShell", "FakeInstaller", "OfficeMacro", "ShadowCopy", "Sysmon", "Behavior", "DPAT", "Endpoint", "SIEM", "Sinkhole", "ZeroTrust", "IAM", "SRUM", "MFAB"];
        shuffle(cards);
        //this.add.image(512, 320, 'back').setScrollFactor(0,0);
        var i;
        var c = this.add.image(250, 300, 'cb').setScrollFactor(0,0);
        //c.setScale(1/2);
        //var winText = this.add.text(700, 300, 'Defeat!', { fontSize: '64px', fill: '#fff' }).setScrollFactor(0,0);
        for (i = 0; i < cards.length; i++) {
          var c = this.add.image(250, 300, cards[i]).setInteractive({ useHandCursor: true  } ).setScrollFactor(0,0);
          //c.setScale(1/2);
          //this.input.setDraggable(c);
          this.input.on('gameobjectdown', function (pointer, gameObject) {
              //this.sound.add('click').play();
              gameObject.destroy();

          });
        }
        var d = this.add.image(900, 50, 'title').setScrollFactor(0,0);
        var e = this.add.image(900, 100, 'videol').setScrollFactor(0,0);
        var f = this.add.image(900, 150, 'story').setScrollFactor(0,0);
        var g = this.add.image(900, 200, 'puzzle').setScrollFactor(0,0);
        var h = this.add.image(900, 250, 'credits').setScrollFactor(0,0);
        var j = this.add.image(900, 300, 'aii').setScrollFactor(0,0);
        var k = this.add.image(900, 350, 'sa').setScrollFactor(0,0);
        d.setInteractive({ useHandCursor: true  } );
        d.setScale(1/4);
        e.setInteractive({ useHandCursor: true  } );
        e.setScale(1/4);
        f.setInteractive({ useHandCursor: true  } );
        f.setScale(1/4);
        g.setInteractive({ useHandCursor: true  } );
        g.setScale(1/4);
        h.setInteractive({ useHandCursor: true  } );
        h.setScale(1/4);
        j.setInteractive({ useHandCursor: true  } );
        j.setScale(1/4);
        k.setInteractive({ useHandCursor: true  } );
        k.setScale(1/4);
        d.on('pointerover',function(pointer){
          d.setScale(1/3);
        });
        d.on('pointerout',function(pointer){
          d.setScale(1/4);
        });
        e.on('pointerover',function(pointer){
          e.setScale(1/3);
        });
        e.on('pointerout',function(pointer){
          e.setScale(1/4);
        });
        f.on('pointerover',function(pointer){
          f.setScale(1/3);
        });
        f.on('pointerout',function(pointer){
          f.setScale(1/4);
        });
        g.on('pointerover',function(pointer){
          g.setScale(1/3);
        });
        g.on('pointerout',function(pointer){
          g.setScale(1/4);
        });
        h.on('pointerover',function(pointer){
          h.setScale(1/3);
        });
        h.on('pointerout',function(pointer){
          h.setScale(1/4);
        });
        j.on('pointerover',function(pointer){
          j.setScale(1/3);
        });
        j.on('pointerout',function(pointer){
          j.setScale(1/4);
        });
        k.on('pointerover',function(pointer){
          k.setScale(1/3);
        });
        k.on('pointerout',function(pointer){
          k.setScale(1/4);
        });
        d.on('pointerdown', () => {
          this.sound.add('click').play();
          //endm.stop();
          this.game.sound.stopAll();
          //this.scene.start('p1');
          window.location.href = "p1.html";
        });
        e.on('pointerdown', () => {
          this.sound.add('click').play();
          //endm.stop();
          this.game.sound.stopAll();
          this.scene.start('vide');
        });
        f.on('pointerdown', () => {
          this.sound.add('click').play();
          //endm.stop();
          this.game.sound.stopAll();
          //this.scene.start('st');
          window.location.href = "story.html";
        });
        g.on('pointerdown', () => {
          this.sound.add('click').play();
          //endm.stop();
          this.game.sound.stopAll();
          this.scene.start('puzz');
        });
        h.on('pointerdown', () => {
          this.sound.add('click').play();
          //endm.stop();
          this.game.sound.stopAll();
          this.scene.start('cred');
        });
        j.on('pointerdown', () => {
          this.sound.add('click').play();
          //endm.stop();
          this.game.sound.stopAll();
          //this.scene.start('ai');
          window.location.href = "ai.html";
        });
        k.on('pointerdown', () => {
          this.sound.add('click').play();
          //endm.stop();
          this.game.sound.stopAll();
          //this.scene.start('san');
          window.location.href = "sans.html";
        });
        var localStorageName = "piratesPort";
        var localStorageTemp = "piratesPort_temp";
        if(localStorage.getItem(localStorageTemp) == null) {
            score = 40;
        } else {
            score = localStorage.getItem(localStorageTemp);
        }
        if(localStorage.getItem(localStorageName) == null) {
            highScore = 40;
        } else {
            highScore = localStorage.getItem(localStorageName);
        }
        //this.add.bitmapText(16, 0, 'fat-and-tiny', 'SCORE: 0', 32);
        var scoreText = this.add.bitmapText(475, 400, 'topaz', 'Last Score: ' + score, 64).setScrollFactor(0,0);
        //var scoreText = this.add.text(475, 400, 'Last Score: ' + score, { fontSize: '64px', fill: '#fff' }).setScrollFactor(0,0);
        //var highscoreText = this.add.text(475, 500, 'Best Score: ' + highScore, { fontSize: '64px', fill: '#fff' }).setScrollFactor(0,0);
        var highscoreText = this.add.bitmapText(475, 500, 'topaz', 'Best Score: ' + highScore, 64).setScrollFactor(0,0);
    this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
      gameObject.x = dragX;
      gameObject.y = dragY;

    });
    this.add.bitmapText(50, 600, 'topaz', '[<- -> TURN] [^ Thrust] [Spacebar Fire]', 32).setScrollFactor(0,0);
  },
  update: function (time, delta)
{
    if (cursors.left.isDown)
    {
        ship.setAngularVelocity(-150);
        mobile = "No";
    }
    else if (cursors.right.isDown)
    {
        ship.setAngularVelocity(150);
        mobile = "No";
    }
    else
    {
        ship.setAngularVelocity(0);
    }

    if (cursors.up.isDown)
    {
        this.physics.velocityFromRotation(ship.rotation, 600, ship.body.acceleration);
        mobile = "No";
    }
    else
    {
        if(mobile == "No"){
          ship.setAcceleration(0);
        }
        else{
          this.physics.velocityFromRotation(ship.rotation, 1, ship.body.acceleration);
        }
    }

    if (fire.isDown && time > lastFired)
    {
        var bullet = bullets.get();

        if (bullet)
        {
            bullet.fire(ship);

            lastFired = time + 100;
        }
    }

    bg.tilePositionX += ship.body.deltaX() * 0.5;
    bg.tilePositionY += ship.body.deltaY() * 0.5;

    stars.tilePositionX += ship.body.deltaX() * 2;
    stars.tilePositionY += ship.body.deltaY() * 2;
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
    scene: [ TitleS, Vide, Puzz, Cred ]
};
var bg;
var stars;
var ship;
var bullets;
var lastFired = 0;
var cursors;
var fire;

var game = new Phaser.Game(config);
