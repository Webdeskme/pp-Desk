var SceneC = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function SceneC ()
    {
        Phaser.Scene.call(this, { key: 'sceneC' });
    },

    preload: function ()
    {
      this.load.bitmapFont('font', 'assets/fonts/lato.png', 'assets/fonts/lato.xml');
      var cards = ["s10", "s11", "s12", "s13", "s14", "s15", "s16","s17","s18", "s20", "s21", "s22", "s23", "s24", "s25", "s26","s27","s28","s30", "s31", "s32", "s33", "s34", "s35", "s36","s37","s38", "s40", "s41", "s42", "s43", "s44", "s45", "s46","s47","s48","s50", "s51", "s52", "s53", "s54", "s55", "s56","s57","s58","s60", "s61", "s62", "s63", "s64", "s65", "s66","s67","s68"];
      var i;
      for (i = 0; i < cards.length; i++) {
        this.load.image(cards[i], 'assets/Cards/' + cards[i] + '.png');
      }
        this.load.image('back3', 'assets/backgrounds/black.png');
        this.load.image('back', 'assets/backgrounds/back1.jpg');
        this.load.image('full', 'assets/icons/expand.png');
        this.load.image('mon', 'assets/icons/sound-on.png');
        this.load.image('moff', 'assets/icons/sound-off.png');
        this.load.image('sb', 'assets/cardback/sb.png');
        this.load.audio('theme', [
        "assets/Audio/I'm Misbehaving_0.wav"
        ]);
        this.load.audio('click', [
        "assets/Audio/mouseclick.wav"
        ]);
        this.load.audio('contact', [
        "assets/Audio/contact1.wav"
        ]);
        this.load.audio('hw-nar', [
        "assets/Audio/hw-rules.mp3"
        ]);
        this.load.text('rules', 'assets/Text/rules.txt');
        this.load.audio('mus', [
        "assets/Audio/MyVeryOwnDeadShip.mp3"
        ]);
    },

    create: function ()
    {
      //var cards = ["s10", "s11", "s12", "s13", "s14", "s15", "s16","s17","s18", "s20", "s21", "s22", "s23", "s24", "s25", "s26","s27","s28","s30", "s31", "s32", "s33", "s34", "s35", "s36","s37","s38", "s40", "s41", "s42", "s43", "s44", "s45", "s46","s47","s48","s50", "s51", "s52", "s53", "s54", "s55", "s56","s57","s58","s60", "s61", "s62", "s63", "s64", "s65", "s66","s67","s68"];
      w = 0;
      this.sound.add('mus').play();
      this.add.image(400, 300, 'back');
      var music = this.sound.add('theme');
      var hwnar = this.sound.add('hw-nar');
      //music.play();
      var win = 0;
      var lose = 0;
      var winText = this.add.bitmapText(16, 375, 'font', 'Wins:0', 32);
      var loseText = this.add.bitmapText(200, 375, 'font', 'Losses:0', 32);
      var h = this.add.bitmapText(16, 16, 'font', 'Home', 32);
      h.setInteractive({ useHandCursor: true  } );
      h.on('pointerdown', () => {
        this.sound.add('click').play();
        //this.scene.start('sceneA');
        window.location.href = "../game.html";
        //music.destroy();
      });
      var r = this.add.bitmapText(700, 16, 'font', 'Rules', 32);
      r.setInteractive({ useHandCursor: true  } );
      r.on('pointerdown', () => {
        this.sound.add('click').play();
        //console.log('scene d');
        //this.scene.start('sceneD');
        //music.destroy();
        var rule = this.add.image(400, 300, 'back3');
        var rules = this.add.text(0, 45, game.cache.text.get('rules'), { fontSize: '12px', fill: '#fff', wordWrap: { width: 800 } });
        var hr = this.add.bitmapText(16, 16, 'font', 'Back', 32);
        hr.setInteractive({ useHandCursor: true  } );
        hwnar.play();
        hr.on('pointerdown', () => {
          rules.destroy();
          rules = null;
          rule.destroy();
          rule = null;
          hr.destroy();
          hr = null;
          hwnar.stop();
          //hwnar.destroy();
          //hwnar = null;
        });
      });
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
          function dumby(x) {
            var cx = c11;
            if(x == 1){
              cx = c11;
            }
            else if (x == 2) {
              cx = c12;
            }
            else if (x == 3) {
              cx = c13;
            }
            else if (x == 4) {
              cx = c14;
            }
            else if (x == 5) {
              cx = c15;
            }
            else if (x == 6) {
              cx = c16;
            }
            else if (x == 7) {
              cx = c17;
            }
            else if (x == 8) {
              cx = c18;
            }
            else if (x == 9) {
              cx = c19;
            }
            else if (x == 10) {
              cx = c20;
            }
            else if(x == 11){
              console.log(c30);
              console.log(c31);
              cx = c31;
            }
            else if (x == 12) {
              cx = c32;
            }
            else if (x == 13) {
              cx = c33;
            }
            else if (x == 14) {
              cx = c34;
            }
            else if (x == 15) {
              cx = c35;
            }
            else if (x == 16) {
              cx = c36;
            }
            else if (x == 17) {
              cx = c37;
            }
            else if (x == 18) {
              cx = c38;
            }
            else if (x == 19) {
              cx = c39;
            }
            else if (x == 20) {
              cx = c40;
            }
            return cx;
          }
        var cards = ["s11", "s12", "s13", "s14", "s15", "s16","s17", "s21", "s22", "s23", "s24", "s25", "s26","s27", "s31", "s32", "s33", "s34", "s35", "s36","s37", "s41", "s42", "s43", "s44", "s45", "s46","s47", "s51", "s52", "s53", "s54", "s55", "s56","s57", "s61", "s62", "s63", "s64", "s65", "s66","s67"];
        shuffle(cards);
        var score = ["s10", "s20", "s30", "s40", "s50", "s60"];
        var s1 = this.add.image(850, 75, score[0]).setInteractive({ useHandCursor: true  } );;
        s1.setScale(1/8);
        var s11 = 'yes';
        var s2 = this.add.image(850, 225, score[1]).setInteractive({ useHandCursor: true  } );;
        s2.setScale(1/8);
        var s22 = 'yes';
        var s3 = this.add.image(850, 375, score[2]).setInteractive({ useHandCursor: true  } );;
        s3.setScale(1/8);
        var s33 = 'yes';
        var s4 = this.add.image(950, 75, score[3]).setInteractive({ useHandCursor: true  } );;
        s4.setScale(1/8);
        var s44 = 'yes';
        var s5 = this.add.image(950, 225, score[4]).setInteractive({ useHandCursor: true  } );;
        s5.setScale(1/8);
        var s55 = 'yes';
        var s6 = this.add.image(950, 375, score[5]).setInteractive({ useHandCursor: true  } );;
        s6.setScale(1/8);
        var s66 = 'yes';
        function hov(th, fill, im) {
          fill.on('pointerover',function(pointer){
            console.log(th);
            big = th.add.image(650, 240, im).setInteractive({ useHandCursor: true  } );;
            big.setScale(1/3);
          });
          fill.on('pointerout',function(pointer){
            console.log('out');
            big.destroy();
            big = null;
          });
        }
        var trump = ["s18", "s28", "s38", "s48", "s58", "s68"];
        shuffle(trump);
        function trumpc(t, im, th) {
          t.setScale(1/8);
          t.on('pointerover',function(pointer){
            console.log('hover');
            big = th.add.image(650, 240, im).setInteractive({ useHandCursor: true  } );;
            big.setScale(1/3);
          });
          t.on('pointerout',function(pointer){
            console.log('out');
            big.destroy();
            big = null;
          });
          t.on('pointerdown', () => {
            y += 1;
            t.destroy();
            t = null;
            big.destroy();
            big = null;
          });
        }
        var y = 1;
        var t1 = this.add.image(50, 150, trump[0]).setInteractive({ useHandCursor: true  } );
        trumpc(t1, trump[0], this);
        var t2 = this.add.image(50, 150, trump[1]).setInteractive({ useHandCursor: true  } );
        trumpc(t2, trump[1], this);
        var t3 = this.add.image(50, 150, trump[2]).setInteractive({ useHandCursor: true  } );
        trumpc(t3, trump[2], this);
        var t4 = this.add.image(50, 150, trump[3]).setInteractive({ useHandCursor: true  } );
        trumpc(t4, trump[3], this);
        var t5 = this.add.image(50, 150, trump[4]).setInteractive({ useHandCursor: true  } );
        trumpc(t5, trump[4], this);
        var t6 = this.add.image(50, 150, trump[5]).setInteractive({ useHandCursor: true  } );
        console.log('trump');
        console.log(t6['texture']['key']);
        trumpc(t6, trump[5], this);
        function scoring(scor, ss) {
          ss = 'no';
          scor.destroy();
          scor = null;
          return ss;
        }
        function playc(th, c, cx, im) {
          c.setScale(1/8);
          c.on('pointerover',function(pointer){
            //console.log(c);
            big = th.add.image(650, 240, im).setInteractive({ useHandCursor: true  } );;
            big.setScale(1/3);
          });
          c.on('pointerout',function(pointer){
            //console.log(cx);
            big.destroy();
            big = null;
          });
          c.on('pointerdown', () => {
            if (typeof big != "undefined") {
              big.destroy();
              //big = null;
            }
            console.log('Clicked card');
            cx = dumby(x);
            x += 1;
            if(y == 1){
              var cy = t6;
            }
            else if (y == 2) {
              var cy = t5;
            }
            else if (y == 3) {
              var cy = t4;
            }
            else if (y == 4) {
              var cy = t3;
            }
            else if (y == 5) {
              var cy = t2;
            }
            else if (y == 6) {
              var cy = t1;
            }
            else if (y == 7) {
              var cy = 'na';
            }
            console.log('c:' + c['texture']['key']);
            console.log('cx:' + cx['texture']['key']);
            console.log('y: ' + y);
            var me = c['texture']['key'];
            var you = cx['texture']['key'];
            if(cy != 'na'){
              console.log('cy:' + cy['texture']['key']);
              var it = cy['texture']['key'];
            }
            else{
              console.log('cy: na');
              var it = 'na';
            }
             me = me.split("");
             you = you.split("");
            var it1 = it;
             it = it.split("");
            if(me[1] == you[1]){
              if(me[2] > you[2]){
                console.log('win');
                win += 1;
              }
              else{
                console.log('lose');
                lose += 1;
              }
            }
            else{
              if(it1 == 'na'){
                console.log('lose');
                lose += 1;
              }
              else{
                if(it[1] == me[1]){
                  console.log('win');
                  win += 1;
                }
                else{
                  console.log('lose');
                  lose += 1;
                }
              }
            }
            var z = win + lose;
            th.sound.add('contact').play();
            th.tweens.add({
                targets: c,
                x: 400,
                y: 300,
                duration: 1000,
                ease: 'Power2',
                completeDelay: 0
            });
            th.tweens.add({
                targets: cx,
                y: 300,
                duration: 1000,
                ease: 'Power2',
                completeDelay: 0
            });
            setTimeout(() => {
              th.sound.add('contact').play();
              var cb = th.add.image(400, 300, 'sb').setInteractive({ useHandCursor: true  } );;
              cb.setScale(1/8);
              c.destroy();
              c = null;
              cx.destroy();
              cx = null;
              setTimeout(() => {
                th.tweens.add({
                    targets: cb,
                    x: -300,
                    duration: 500,
                    ease: 'Power2',
                    completeDelay: 250
                });
                th.sound.add('contact').play();
                winText.setText('Wins:' + win);
                loseText.setText('Losses:' + lose);
                if(z == 10){
                  setTimeout(() => {
                    if(win == 1 && s11 == 'yes'){
                      console.log('s1');
                      console.log(s11);
                      s11 = scoring(s1, s11);
                      console.log(s11);
                    }
                    else if (win == 2 && s22 == 'yes') {
                      console.log('s2');
                      console.log(s22);
                      s22 = scoring(s2, s22);
                      console.log(s22);
                    }
                    else if (win == 3 && s33 == 'yes') {
                      console.log('s3');
                      console.log(s33);
                      s33 = scoring(s3, s33);
                      console.log(s33);
                    }
                    else if (win == 4 && s44 == 'yes') {
                      console.log('s4');
                      console.log(s44);
                      s44 = scoring(s4, s44);
                      console.log(s44);
                    }
                    else if (win == 5 && s55 == 'yes') {
                      console.log('s5');
                      console.log(s55);
                      s55 = scoring(s5, s55);
                      console.log(s55);
                    }
                    else if (win == 6 && s66 == 'yes') {
                      console.log('s6');
                      console.log('s66');
                      s66 = scoring(s6, s66);
                      console.log(s66);
                    }
                    else{
                      console.log('You Lose!');
                      console.log('x: ' + x);
                      w = 0;
                      th.scene.start('sceneD');
                    }
                    if(w == 3){
                      th.scene.start('sceneE');
                    }
                    console.log('move on');
                    console.log(x);
                    if(x == 11){
                      g2(th);
                    }
                    else if (x == 21) {
                      g1(th);
                    }
                  }, 3000);
                }
              }, 500);
            }, 500);
          });
          return x;
        }
        var x = 1;
        var c1 = this.add.image(50, 575, cards[0]).setInteractive({ useHandCursor: true  } );
        playc(this, c1, cx, cards[0]);
        var c2 = this.add.image(150, 575, cards[1]).setInteractive({ useHandCursor: true  } );
        playc(this, c2, cx, cards[1]);
        var c3 = this.add.image(250, 575, cards[2]).setInteractive({ useHandCursor: true  } );
        playc(this, c3, cx, cards[2]);
        var c4 = this.add.image(350, 575, cards[3]).setInteractive({ useHandCursor: true  } );
        playc(this, c4, cx, cards[3]);
        var c5 = this.add.image(450, 575, cards[4]).setInteractive({ useHandCursor: true  } );
        playc(this, c5, cx, cards[4]);
        var c6 = this.add.image(550, 575, cards[5]).setInteractive({ useHandCursor: true  } );
        playc(this, c6, cx, cards[5]);
        var c7 = this.add.image(650, 575, cards[6]).setInteractive({ useHandCursor: true  } );
        playc(this, c7, cx, cards[6]);
        var c8 = this.add.image(750, 575, cards[7]).setInteractive({ useHandCursor: true  } );
        playc(this, c8, cx, cards[7]);
        var c9 = this.add.image(850, 575, cards[8]).setInteractive({ useHandCursor: true  } );
        playc(this, c9, cx, cards[8]);
        var c10 = this.add.image(950, 575, cards[9]).setInteractive({ useHandCursor: true  } );
        playc(this, c10, cx, cards[9]);
        function hove(c, th, im){
          c.on('pointerover',function(pointer){
            console.log('hover');
            big = th.add.image(650, 240, im).setInteractive({ useHandCursor: true  } );;
            big.setScale(1/3);
          });
          c.on('pointerout',function(pointer){
            console.log('out');
            big.destroy();
            big = null;
          });
        }
        var c20 = this.add.image(400, 100, cards[19]).setInteractive({ useHandCursor: true  } );;
        c20.setScale(1/8);
        hove(c20, this, cards[19]);
        var c19 = this.add.image(400, 100, cards[18]).setInteractive({ useHandCursor: true  } );;
        c19.setScale(1/8);
        hove(c19, this, cards[18]);
        var c18 = this.add.image(400, 100, cards[17]).setInteractive({ useHandCursor: true  } );;
        c18.setScale(1/8);
        hove(c18, this, cards[17]);
        var c17 = this.add.image(400, 100, cards[16]).setInteractive({ useHandCursor: true  } );;
        c17.setScale(1/8);
        hove(c17, this, cards[16]);
        var c16 = this.add.image(400, 100, cards[15]).setInteractive({ useHandCursor: true  } );;
        c16.setScale(1/8);
        hove(c16, this, cards[15]);
        var c15 = this.add.image(400, 100, cards[14]).setInteractive({ useHandCursor: true  } );;
        c15.setScale(1/8);
        hove(c15, this, cards[14]);
        var c14 = this.add.image(400, 100, cards[13]).setInteractive({ useHandCursor: true  } );;
        c14.setScale(1/8);
        hove(c14, this, cards[13]);
        var c13 = this.add.image(400, 100, cards[12]).setInteractive({ useHandCursor: true  } );;
        c13.setScale(1/8);
        hove(c13, this, cards[12]);
        var c12 = this.add.image(400, 100, cards[11]).setInteractive({ useHandCursor: true  } );;
        c12.setScale(1/8);
        hove(c12, this, cards[11]);
        var c11 = this.add.image(400, 100, cards[10]).setInteractive({ useHandCursor: true  } );;
        c11.setScale(1/8);
        hove(c11, this, cards[10]);
        var cx = c11;
        function g1(th){
          var cards = ["s11", "s12", "s13", "s14", "s15", "s16","s17", "s21", "s22", "s23", "s24", "s25", "s26","s27", "s31", "s32", "s33", "s34", "s35", "s36","s37", "s41", "s42", "s43", "s44", "s45", "s46","s47", "s51", "s52", "s53", "s54", "s55", "s56","s57", "s61", "s62", "s63", "s64", "s65", "s66","s67"];
          shuffle(cards);
          win = 0;
          lose = 0;
          x = 1;
          winText.setText('Wins:' + win);
          loseText.setText('Losses:' + lose);
          //var cx = c21;
          console.log(c1);
           c1 = th.add.image(50, 575, cards[0]).setInteractive({ useHandCursor: true  } );
          playc(th, c1, cx, cards[0]);
           c2 = th.add.image(150, 575, cards[1]).setInteractive({ useHandCursor: true  } );
          playc(th, c2, cx, cards[1]);
           c3 = th.add.image(250, 575, cards[2]).setInteractive({ useHandCursor: true  } );
          playc(th, c3, cx, cards[2]);
           c4 = th.add.image(350, 575, cards[3]).setInteractive({ useHandCursor: true  } );
          playc(th, c4, cx, cards[3]);
           c5 = th.add.image(450, 575, cards[4]).setInteractive({ useHandCursor: true  } );
          playc(th, c5, cx, cards[4]);
           c6 = th.add.image(550, 575, cards[5]).setInteractive({ useHandCursor: true  } );
          playc(th, c6, cx, cards[5]);
           c7 = th.add.image(650, 575, cards[6]).setInteractive({ useHandCursor: true  } );
          playc(th, c7, cx, cards[6]);
           c8 = th.add.image(750, 575, cards[7]).setInteractive({ useHandCursor: true  } );
          playc(th, c8, cx, cards[7]);
           c9 = th.add.image(850, 575, cards[8]).setInteractive({ useHandCursor: true  } );
          playc(th, c9, cx, cards[8]);
           c10 = th.add.image(950, 575, cards[9]).setInteractive({ useHandCursor: true  } );
          playc(th, c10, cx, cards[9]);
           c20 = th.add.image(400, 100, cards[19]).setInteractive({ useHandCursor: true  } );;
          c20.setScale(1/8);
          hove(c20, th, cards[19]);
           c19 = th.add.image(400, 100, cards[18]).setInteractive({ useHandCursor: true  } );;
          c19.setScale(1/8);
          hove(c19, th, cards[18]);
           c18 = th.add.image(400, 100, cards[17]).setInteractive({ useHandCursor: true  } );;
          c18.setScale(1/8);
          hove(c18, th, cards[17]);
           c17 = th.add.image(400, 100, cards[16]).setInteractive({ useHandCursor: true  } );;
          c17.setScale(1/8);
          hove(c17, th, cards[16]);
           c16 = th.add.image(400, 100, cards[15]).setInteractive({ useHandCursor: true  } );;
          c16.setScale(1/8);
          hove(c16, th, cards[15]);
           c15 = th.add.image(400, 100, cards[14]).setInteractive({ useHandCursor: true  } );;
          c15.setScale(1/8);
          hove(c15, th, cards[14]);
           c14 = th.add.image(400, 100, cards[13]).setInteractive({ useHandCursor: true  } );;
          c14.setScale(1/8);
          hove(c14, th, cards[13]);
           c13 = th.add.image(400, 100, cards[12]).setInteractive({ useHandCursor: true  } );;
          c13.setScale(1/8);
          hove(c13, th, cards[12]);
           c12 = th.add.image(400, 100, cards[11]).setInteractive({ useHandCursor: true  } );;
          c12.setScale(1/8);
          hove(c12, th, cards[11]);
           c11 = th.add.image(400, 100, cards[10]).setInteractive({ useHandCursor: true  } );;
          c11.setScale(1/8);
          hove(c11, th, cards[10]);
          var cx = c31;
        }
        function g2(th){
          w += 1;
          console.log('w: ' + w);
          win = 0;
          lose = 0;
          //x = 1;
          winText.setText('Wins:' + win);
          loseText.setText('Losses:' + lose);
          //var cx = c21;
           c21 = th.add.image(50, 575, cards[20]).setInteractive({ useHandCursor: true  } );;
          playc(th, c21, cx, cards[20]);
           c22 = th.add.image(150, 575, cards[21]).setInteractive({ useHandCursor: true  } );;
          playc(th, c22, cx, cards[21]);
           c23 = th.add.image(250, 575, cards[22]).setInteractive({ useHandCursor: true  } );;
          playc(th, c23, cx, cards[22]);
           c24 = th.add.image(350, 575, cards[23]).setInteractive({ useHandCursor: true  } );;
          playc(th, c24, cx, cards[23]);
           c25 = th.add.image(450, 575, cards[24]).setInteractive({ useHandCursor: true  } );;
          playc(th, c25, cx, cards[24]);
           c26 = th.add.image(550, 575, cards[25]).setInteractive({ useHandCursor: true  } );;
          playc(th, c26, cx, cards[25]);
           c27 = th.add.image(650, 575, cards[26]).setInteractive({ useHandCursor: true  } );;
          playc(th, c27, cx, cards[26]);
           c28 = th.add.image(750, 575, cards[27]).setInteractive({ useHandCursor: true  } );;
          playc(th, c28, cx, cards[27]);
           c29 = th.add.image(850, 575, cards[28]).setInteractive({ useHandCursor: true  } );;
          playc(th, c29, cx, cards[28]);
           c30 = th.add.image(950, 575, cards[29]).setInteractive({ useHandCursor: true  } );;
          playc(th, c30, cx, cards[29]);
           c40 = th.add.image(400, 100, cards[39]).setInteractive({ useHandCursor: true  } );;
          c40.setScale(1/8);
          hove(c40, th, cards[39]);
           c39 = th.add.image(400, 100, cards[38]).setInteractive({ useHandCursor: true  } );;
          c39.setScale(1/8);
          hove(c39, th, cards[38]);
           c38 = th.add.image(400, 100, cards[37]).setInteractive({ useHandCursor: true  } );;
          c38.setScale(1/8);
          hove(c38, th, cards[37]);
           c37 = th.add.image(400, 100, cards[36]).setInteractive({ useHandCursor: true  } );;
          c37.setScale(1/8);
          hove(c37, th, cards[36]);
           c36 = th.add.image(400, 100, cards[35]).setInteractive({ useHandCursor: true  } );;
          c36.setScale(1/8);
          hove(c36, th, cards[35]);
           c35 = th.add.image(400, 100, cards[34]).setInteractive({ useHandCursor: true  } );;
          c35.setScale(1/8);
          hove(c35, th, cards[34]);
           c34 = th.add.image(400, 100, cards[33]).setInteractive({ useHandCursor: true  } );;
          c34.setScale(1/8);
          hove(c34, th, cards[33]);
           c33 = th.add.image(400, 100, cards[32]).setInteractive({ useHandCursor: true  } );;
          c33.setScale(1/8);
          hove(c33, th, cards[32]);
           c32 = th.add.image(400, 100, cards[31]).setInteractive({ useHandCursor: true  } );;
          c32.setScale(1/8);
          hove(c32, th, cards[31]);
           c31 = th.add.image(400, 100, cards[30]).setInteractive({ useHandCursor: true  } );;
          c31.setScale(1/8);
          hove(c31, th, cards[30]);
          var cx = c31;
        }
        fu = this.add.image(125, 35, 'full').setInteractive({ useHandCursor: true  } );
        mon = this.add.image(175, 35, 'mon').setInteractive({ useHandCursor: true  } );
        moff = this.add.image(225, 35, 'moff').setInteractive({ useHandCursor: true  } );
        fu.setScale(1/16);
        mon.setScale(1/16);
        moff.setScale(1/16);
        mon.on('pointerdown', () => {
          this.sound.add('mus').play();
        });
        moff.on('pointerdown', () => {
          this.game.sound.stopAll();
        });
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

var SceneD = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function SceneD ()
    {
        Phaser.Scene.call(this, { key: 'sceneD' });
    },

    preload: function ()
    {
      this.load.bitmapFont('font', 'assets/fonts/lato.png', 'assets/fonts/lato.xml');
      this.load.image('back2', 'assets/backgrounds/black.png');
      this.load.audio('click', [
      "assets/Audio/mouseclick.wav"
      ]);
    },

    create: function ()
    {
      var rule = this.add.image(400, 300, 'back2');
      /*var h = this.add.text(16, 16, 'Retry', { fontSize: '32px', fill: '#fff' });
      h.setInteractive({ useHandCursor: true  } );
      h.on('pointerdown', () => {
        this.sound.add('click').play();
        console.log('scene c');
        this.scene.start('sceneC');
      });*/
      var h = this.add.bitmapText(100, 300, 'font', 'Maybe Next Time', 64);
      h.setInteractive({ useHandCursor: true  } );
      h.on('pointerdown', () => {
        this.sound.add('click').play();
        console.log('scene c');
        //this.scene.start('sceneA');
        window.location.href = "../game.html";
      });
      var r = this.add.bitmapText(700, 16, 'font', 'Home', 32);
      r.setInteractive({ useHandCursor: true  } );
      r.on('pointerdown', () => {
        this.sound.add('click').play();
        //console.log('scene a');
        //this.scene.start('sceneA');
        window.location.href = "../game.html";
      });
    }
});

var SceneE = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function SceneE ()
    {
        Phaser.Scene.call(this, { key: 'sceneE' });
    },

    preload: function ()
    {
      this.load.bitmapFont('font', 'assets/fonts/lato.png', 'assets/fonts/lato.xml');
      this.load.image('back2', 'assets/backgrounds/black.png');
      this.load.audio('click', [
      "assets/Audio/mouseclick.wav"
      ]);
    },

    create: function ()
    {
      var localStorageBadge = "piratesPort_badge4";
      var rule = this.add.image(400, 300, 'back2');
      localStorage.setItem(localStorageBadge, "badge4");
      var h = this.add.bitmapText(100, 300, 'font', 'You Win!', 64);
      h.setInteractive({ useHandCursor: true  } );
      h.on('pointerdown', () => {
        this.sound.add('click').play();
        //console.log('scene c');
        //this.scene.start('sceneA');
        window.location.href = "../game.html";
      });
      var r = this.add.bitmapText(700, 16, 'font', 'Home', 32);
      r.setInteractive({ useHandCursor: true  } );
      r.on('pointerdown', () => {
        this.sound.add('click').play();
        //console.log('scene a');
        //this.scene.start('sceneA');
        window.location.href = "../game.html";
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
    render: {
      clearBeforeRender: false
    },
    enableDebug: false,
    backgroundColor: '#000000',
    scene: [SceneC, SceneD,  SceneE]
};

var game = new Phaser.Game(config);
