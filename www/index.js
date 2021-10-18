var P1 = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize:
    function P1 ()
    {
        Phaser.Scene.call(this, { key: 'p1' });
    },
    preload: function ()
    {
        var cards = ["Browser", "Malware", "PrivilegeEsc", "Driver", "Service", "CloudStorage", "IMDS", "MFA", "User", "CloudAccount", "CredStuffing", "Kubelet", "WateringHole", "WebShell", "FakeInstaller", "OfficeMacro", "ShadowCopy", "Sysmon", "Behavior", "DPAT", "Endpoint", "SIEM", "Sinkhole", "ZeroTrust", "IAM", "SRUM", "MFAB", "EMP", "P1S", "P1C", "P2S", "P2C"];
        this.load.bitmapFont('topaz', 'assets/fonts/lato.png', 'assets/fonts/lato.xml');
        this.load.image('back', 'assets/backgrounds/star1.jpg');
        this.load.image('cb', 'assets/cards/back.png');
        this.load.image('COM', 'assets/cards/COM.png');
        this.load.image('COM2', 'assets/cards/COM2.png');
        this.load.image('ENGINES', 'assets/cards/ENGINES.png');
        this.load.image('ENGINES2', 'assets/cards/ENGINES2.png');
        this.load.image('PORT', 'assets/cards/PORT.png');
        this.load.image('PORT2', 'assets/cards/PORT2.png');
        this.load.image('Guns', 'assets/cards/Guns.png');
        this.load.image('COMbig', 'assets/out/COM.png');
        this.load.image('COM2big', 'assets/out/COM2.png');
        this.load.image('ENGINESbig', 'assets/out/ENGINES.png');
        this.load.image('ENGINES2big', 'assets/out/ENGINES2.png');
        this.load.image('PORTbig', 'assets/out/PORT.png');
        this.load.image('PORT2big', 'assets/out/PORT2.png');
        this.load.image('Gunsbig', 'assets/out/Guns.png');
        this.load.image('END', 'assets/text/end.png');
        this.load.image('SCORE', 'assets/text/SCORE2.png');
        this.load.image('musicOff', 'assets/icons/sound-off.png');
        this.load.image('musicOn', 'assets/icons/sound-on.png');
        this.load.image('full', 'assets/icons/expand.png');
        this.load.video('rules', 'assets/Video/walkthrough.mp4', 'loadeddata', false, false);
        var i;
        for (i = 0; i < cards.length; i++) {
          this.load.image(cards[i], 'assets/cards/' + cards[i] + '.png');
        }
        var i;
        for (i = 0; i < cards.length; i++) {
          var zzz = cards[i] + 'big';
          this.load.image(zzz, 'assets/out/' + cards[i] + '.png');
        }
        this.load.audio('click', [
        "assets/Audio/mouseclick.wav"
        ]);
        this.load.audio('mend', [
        "assets/Audio/explosion.wav"
        ]);
        this.load.audio('aq', [
        "assets/Audio/gmae.wav"
        ]);
        this.load.audio('mwin', [
        "assets/Audio/WinSaw.wav"
        ]);
        this.load.audio('sc', [
        "assets/Audio/completetask_0.mp3"
        ]);
        this.load.audio('mlose', [
        "assets/Audio/MachinePowerOff.mp3"
        ]);
        this.load.audio('comp', [
        "assets/Audio/explosion5.mp3"
        ]);
        this.load.audio('music', [
        "assets/Audio/MyVeryOwnDeadShip.mp3"
        ]);
        for (i = 0; i < cards.length; i++) {
          this.load.audio(cards[i], [
          "assets/Audio/cards/" + cards[i] + ".mp3"
          ]);
        }
    },
    create: function ()
    {
      this.socket = io();
      this.socket.on('player', function (si1) {
        serv.setText('You are Player ' + si1);
        console.log("player: " + si1);
        if(si1 == 1){
          pl = 1;
          shuffle(cards);
          shuffle(p);
          th.socket.emit("cards", cards);
          th.socket.emit("p", p);
          start(th, cards, p);
        }
        else{
          pl = 2;
          th.socket.on('cards', function (si3) {
            cards = si3;
            th.socket.on('p', function (si4) {
              p = si4;
              start(th, cards, p);
            });
          });
        }
        start(th, cards, p);
      });
      function bselect(c, th, im){
        if(player == pl){
          c.on('pointerdown',function(pointer){
            var aquire = "no";
            th.sound.add('click').play();
            if(red == "yes"){
              th.socket.emit('bsel', c['x']);
              if(c.tintTopLeft !== 0x00ff00){
                c.setTint(0x00ff00);
                console.log(c['x']);
                if(c["texture"]["key"] == "P1C"){
                  coin += 1;
                  ccard += 1;
                  card += 1;
                  temp.push(c["texture"]["key"]);
                }
                else if (c["texture"]["key"] == "P1S") {
                  skill += 1;
                  scard += 1;
                  card += 1;
                  temp.push(c["texture"]["key"]);
                }
                else if(c["texture"]["key"] == "P2C"){
                  coin += 1;
                  ccard += 1;
                  card += 1;
                  temp.push(c["texture"]["key"]);
                }
                else if (c["texture"]["key"] == "P2S") {
                  skill += 1;
                  scard += 1;
                  card += 1;
                  temp.push(c["texture"]["key"]);
                }
                else if (c["texture"]["key"] == "Browser") {
                  card += 1;
                  temp.push(c["texture"]["key"]);
                }
                else if (c["texture"]["key"] == "Malware") {
                  skill += 5;
                  scard += 1;
                  card += 1;
                  temp.push(c["texture"]["key"]);
                }
                else if (c["texture"]["key"] == "PrivilegeEsc") {
                  skill += 5;
                  scard += 1;
                  coin += 6;
                  ccard += 1;
                  card += 1;
                  temp.push(c["texture"]["key"]);
                }
                else if (c["texture"]["key"] == "Driver") {
                  skill += 1;
                  scard += 1;
                  card += 1;
                  temp.push(c["texture"]["key"]);
                }
                else if (c["texture"]["key"] == "Service") {
                  card += 1;
                  temp.push(c["texture"]["key"]);
                }
                else if (c["texture"]["key"] == "CloudStorage") {
                  skill += 2;
                  scard += 1;
                  card += 1;
                  temp.push(c["texture"]["key"]);
                }
                else if (c["texture"]["key"] == "IMDS") {
                  skill += 6;
                  scard += 1;
                  card += 1;
                  temp.push(c["texture"]["key"]);
                }
                else if (c["texture"]["key"] == "MFA") {
                  coin += 5;
                  ccard += 1;
                  card += 1;
                  temp.push(c["texture"]["key"]);
                }
                else if (c["texture"]["key"] == "User") {
                  skill += 1;
                  scard += 1;
                  card += 1;
                  temp.push(c["texture"]["key"]);
                }
                else if (c["texture"]["key"] == "CloudAccount") {
                  coin += 5;
                  ccard += 1;
                  card += 1;
                  temp.push(c["texture"]["key"]);
                }
                else if (c["texture"]["key"] == "CredStuffing") {
                  coin += 3;
                  ccard += 1;
                  card += 1;
                  temp.push(c["texture"]["key"]);
                }
                else if (c["texture"]["key"] == "Kubelet") {
                  coin += 1;
                  ccard += 1;
                  card += 1;
                  temp.push(c["texture"]["key"]);
                }
                else if (c["texture"]["key"] == "WateringHole") {
                  card += 1;
                  temp.push(c["texture"]["key"]);
                }
                else if (c["texture"]["key"] == "WebShell") {
                  coin += 2;
                  ccard += 1;
                  card += 1;
                  temp.push(c["texture"]["key"]);
                }
                else if (c["texture"]["key"] == "FakeInstaller") {
                  skill += 3;
                  scard += 1;
                  card += 1;
                  temp.push(c["texture"]["key"]);
                }
                else if (c["texture"]["key"] == "OfficeMacro") {
                  card += 1;
                  temp.push(c["texture"]["key"]);
                }
                else if (c["texture"]["key"] == "ShadowCopy") {
                  coin += 4;
                  ccard += 1;
                  card += 1;
                  temp.push(c["texture"]["key"]);
                }
                else if (c["texture"]["key"] == "Sysmon") {
                  skill += 2;
                  scard += 1;
                  card += 1;
                  temp.push(c["texture"]["key"]);
                }
                else if (c["texture"]["key"] == "Behavior") {
                  skill += 4;
                  scard += 1;
                  card += 1;
                  temp.push(c["texture"]["key"]);
                }
                else if (c["texture"]["key"] == "DPAT") {
                  coin += 1;
                  ccard += 1;
                  card += 1;
                  temp.push(c["texture"]["key"]);
                }
                else if (c["texture"]["key"] == "Endpoint") {
                  coin += 2;
                  ccard += 1;
                  card += 1;
                  temp.push(c["texture"]["key"]);
                }
                else if (c["texture"]["key"] == "SIEM") {
                  skill += 2;
                  scard += 1;
                  card += 1;
                  temp.push(c["texture"]["key"]);
                }
                else if (c["texture"]["key"] == "Sinkhole") {
                  skill += 1;
                  scard += 1;
                  card += 1;
                  temp.push(c["texture"]["key"]);
                }
                else if (c["texture"]["key"] == "ZeroTrust") {
                  skill += 5;
                  scard += 1;
                  card += 1;
                  temp.push(c["texture"]["key"]);
                }
                else if (c["texture"]["key"] == "IAM") {
                  coin += 2;
                  ccard += 1;
                  card += 1;
                  temp.push(c["texture"]["key"]);
                }
                else if (c["texture"]["key"] == "SRUM") {
                  coin += 2;
                  ccard += 1;
                  card += 1;
                  temp.push(c["texture"]["key"]);
                }
                else if (c["texture"]["key"] == "MFAB") {
                  coin += 6;
                  ccard += 1;
                  card += 1;
                  temp.push(c["texture"]["key"]);
                }
              }
              else{
                c.clearTint();
                if(c["texture"]["key"] == "P1C"){
                  coin -= 1;
                  ccard -= 1;
                  card -= 1;
                  var t = temp.indexOf(c["texture"]["key"]);
                  temp.splice(t, 1);
                }
                else if (c["texture"]["key"] == "P1S") {
                  skill -= 1;
                  scard -= 1;
                  card -= 1;
                  var t = temp.indexOf(c["texture"]["key"]);
                  temp.splice(t, 1);
                }
                else if(c["texture"]["key"] == "P2C"){
                  coin -= 1;
                  ccard -= 1;
                  card -= 1;
                  var t = temp.indexOf(c["texture"]["key"]);
                  temp.splice(t, 1);
                }
                else if (c["texture"]["key"] == "P2S") {
                  skill -= 1;
                  scard -= 1;
                  card -= 1;
                  var t = temp.indexOf(c["texture"]["key"]);
                  temp.splice(t, 1);
                }
                else if (c["texture"]["key"] == "Browser") {
                  card -= 1;
                  var t = temp.indexOf(c["texture"]["key"]);
                  temp.splice(t, 1);
                }
                else if (c["texture"]["key"] == "Malware") {
                  skill -= 5;
                  scard -= 1;
                  card -= 1;
                  var t = temp.indexOf(c["texture"]["key"]);
                  temp.splice(t, 1);
                }
                else if (c["texture"]["key"] == "PrivilegeEsc") {
                  card -= 1;
                  var t = temp.indexOf(c["texture"]["key"]);
                  temp.splice(t, 1);
                }
                else if (c["texture"]["key"] == "Driver") {
                  skill -= 1;
                  scard -= 1;
                  card -= 1;
                  var t = temp.indexOf(c["texture"]["key"]);
                  temp.splice(t, 1);
                }
                else if (c["texture"]["key"] == "Service") {
                  card -= 1;
                  var t = temp.indexOf(c["texture"]["key"]);
                  temp.splice(t, 1);
                }
                else if (c["texture"]["key"] == "CloudStorage") {
                  skill -= 2;
                  scard -= 1;
                  card -= 1;
                  var t = temp.indexOf(c["texture"]["key"]);
                  temp.splice(t, 1);
                }
                else if (c["texture"]["key"] == "IMDS") {
                  skill -= 6;
                  scard -= 1;
                  card -= 1;
                  var t = temp.indexOf(c["texture"]["key"]);
                  temp.splice(t, 1);
                }
                else if (c["texture"]["key"] == "MFA") {
                  coin -= 5;
                  ccard -= 1;
                  card -= 1;
                  var t = temp.indexOf(c["texture"]["key"]);
                  temp.splice(t, 1);
                }
                else if (c["texture"]["key"] == "User") {
                  skill -= 1;
                  scard -= 1;
                  card -= 1;
                  var t = temp.indexOf(c["texture"]["key"]);
                  temp.splice(t, 1);
                }
                else if (c["texture"]["key"] == "CloudAccount") {
                  coin -= 5;
                  ccard -= 1;
                  card -= 1;
                  var t = temp.indexOf(c["texture"]["key"]);
                  temp.splice(t, 1);
                }
                else if (c["texture"]["key"] == "CredStuffing") {
                  coin -= 3;
                  ccard -= 1;
                  card -= 1;
                  var t = temp.indexOf(c["texture"]["key"]);
                  temp.splice(t, 1);
                }
                else if (c["texture"]["key"] == "Kubelet") {
                  coin -= 1;
                  ccard -= 1;
                  card -= 1;
                  var t = temp.indexOf(c["texture"]["key"]);
                  temp.splice(t, 1);
                }
                else if (c["texture"]["key"] == "WateringHole") {
                  card -= 1;
                  var t = temp.indexOf(c["texture"]["key"]);
                  temp.splice(t, 1);
                }
                else if (c["texture"]["key"] == "WebShell") {
                  coin -= 2;
                  ccard -= 1;
                  card -= 1;
                  var t = temp.indexOf(c["texture"]["key"]);
                  temp.splice(t, 1);
                }
                else if (c["texture"]["key"] == "FakeInstaller") {
                  skill -= 3;
                  scard -= 1;
                  card -= 1;
                  var t = temp.indexOf(c["texture"]["key"]);
                  temp.splice(t, 1);
                }
                else if (c["texture"]["key"] == "OfficeMacro") {
                  card -= 1;
                  var t = temp.indexOf(c["texture"]["key"]);
                  temp.splice(t, 1);
                }
                else if (c["texture"]["key"] == "ShadowCopy") {
                  coin -= 4;
                  ccard -= 1;
                  card -= 1;
                  var t = temp.indexOf(c["texture"]["key"]);
                  temp.splice(t, 1);
                }
                else if (c["texture"]["key"] == "Sysmon") {
                  skill -= 2;
                  scard -= 1;
                  card -= 1;
                  var t = temp.indexOf(c["texture"]["key"]);
                  temp.splice(t, 1);
                }
                else if (c["texture"]["key"] == "Behavior") {
                  skill -= 4;
                  scard -= 1;
                  card -= 1;
                  var t = temp.indexOf(c["texture"]["key"]);
                  temp.splice(t, 1);
                }
                else if (c["texture"]["key"] == "DPAT") {
                  coin -= 1;
                  ccard -= 1;
                  card -= 1;
                  var t = temp.indexOf(c["texture"]["key"]);
                  temp.splice(t, 1);
                }
                else if (c["texture"]["key"] == "Endpoint") {
                  coin -= 2;
                  ccard -= 1;
                  card -= 1;
                  var t = temp.indexOf(c["texture"]["key"]);
                  temp.splice(t, 1);
                }
                else if (c["texture"]["key"] == "SIEM") {
                  skill -= 2;
                  scard -= 1;
                  card -= 1;
                  var t = temp.indexOf(c["texture"]["key"]);
                  temp.splice(t, 1);
                }
                else if (c["texture"]["key"] == "Sinkhole") {
                  skill -= 1;
                  scard -= 1;
                  card -= 1;
                  var t = temp.indexOf(c["texture"]["key"]);
                  temp.splice(t, 1);
                }
                else if (c["texture"]["key"] == "ZeroTrust") {
                  skill -= 5;
                  scard -= 1;
                  card -= 1;
                  var t = temp.indexOf(c["texture"]["key"]);
                  temp.splice(t, 1);
                }
                else if (c["texture"]["key"] == "IAM") {
                  coin -= 2;
                  ccard -= 1;
                  card -= 1;
                  var t = temp.indexOf(c["texture"]["key"]);
                  temp.splice(t, 1);
                }
                else if (c["texture"]["key"] == "SRUM") {
                  coin -= 2;
                  ccard -= 1;
                  card -= 1;
                  var t = temp.indexOf(c["texture"]["key"]);
                  temp.splice(t, 1);
                }
                else if (c["texture"]["key"] == "MFAB") {
                  coin -= 6;
                  ccard -= 1;
                  card -= 1;
                  var t = temp.indexOf(c["texture"]["key"]);
                  temp.splice(t, 1);
                }
              }
              skillText.setText('Skill: ' + skill);
              coinText.setText('Coins: ' + coin);
              total = skill + coin;
              totalText.setText('Total: ' + total);
              cardText.setText('Cards: ' + card);
              if(type == "skill"){
                if(skill >= cost){
                  aquire = "yes";
                }
              }
              else if (type == "coin") {
                if(coin >= cost){
                  aquire = "yes";
                }
              }
              else if (type == "total") {
                if(total >= cost){
                  aquire = "yes";
                }
              }
              else if (type == "card") {
                if(card >= cost){
                  aquire = "yes";
                }
              }
              else if (type == "ccard") {
                if(ccard >= cost){
                  aquire = "yes";
                }
              }
              else if (type == "scard") {
                if(scard >= cost){
                  aquire = "yes";
                }
              }
              else if (type == "aq") {
                if(aq >= cost){
                  aquire = "yes";
                }
              }
              if( aquire == "yes"){
                aq += 1;
                console.log(p3);
                if(por == "PORT2"){
                  if(aq > 2){
                    th.sound.add('comp').play();
                    cp.destroy();
                    game += 1;
                    por = "no";
                    if(game > 2){
                      th.sound.add('mwin').play();
                      if(localStorage.getItem(localStorageName) == null) {
                          highScore = 40;
                      } else {
                          highScore = localStorage.getItem(localStorageName);
                      }
                      if(score < highScore){
                        localStorage.setItem(localStorageName, score);
                      }
                      localStorage.setItem(localStorageTemp, score);
                      localStorage.setItem(localStoragePlayer, player);
                      window.location.href = "winv.html";
                    }
                  }
                }
                if (typeof big != "undefined" && big != null) {
                  big.destroy();
                  big = null;
                }
                if(checkScore == "yes"){
                  th.sound.add('sc').play();
                }
                else{
                  th.sound.add('aq').play();
                }
                if(checkScore == "yes"){
                  cscore += 1;
                  var t = cards.indexOf(temp2);
                  cards.splice(t, 1);
                  cards.filter(val => val);
                  score -= 10;
                  if(cscore > 2){
                    tscore.destroy();
                  }
                  if(temp2 == "Browser"){
                    score += 5;
                  }
                  else if (temp2 == "Malware") {
                    score += 2;
                  }
                  else if (temp2 == "PrivilegeEsc") {
                    score += 2;
                  }
                  else if (temp2 == "Driver") {
                    score += 3;
                  }
                  else if (temp2 == "Service") {
                    score += 4;
                  }
                  else if (temp2 == "CloudStorage") {
                    score += 4;
                  }
                  else if (temp2 == "IMDS") {
                    score += 1;
                  }
                  else if (temp2 == "MFA") {
                    score += 2;
                  }
                  else if (temp2 == "User") {
                    score += 4;
                  }
                  else if (temp2 == "CloudAccount") {
                    score += 2;
                  }
                  else if (temp2 == "CredStuffing") {
                    score += 4;
                  }
                  else if (temp2 == "Kubelet") {
                    score += 5;
                  }
                  else if (temp2 == "WateringHole") {
                    score += 3;
                  }
                  else if (temp2 == "WebShell") {
                    score += 5;
                  }
                  else if (temp2 == "FakeInstaller") {
                    score += 4;
                  }
                  else if (temp2 == "OfficeMacro") {
                    score += 6;
                  }
                  else if (temp2 == "ShadowCopy") {
                    score += 3;
                  }
                  else if (temp2 == "Sysmon") {
                    score += 3;
                  }
                  else if (temp2 == "Behavior") {
                    score += 3;
                  }
                  else if (temp2 == "DPAT") {
                    score += 3;
                  }
                  else if (temp2 == "Endpoint") {
                    score += 4;
                  }
                  else if (temp2 == "SIEM") {
                    score += 5;
                  }
                  else if (temp2 == "Sinkhole") {
                    score += 5;
                  }
                  else if (temp2 == "ZeroTrust") {
                    score += 2;
                  }
                  else if (temp2 == "IAM") {
                    score += 3;
                  }
                  else if (temp2 == "SRUM") {
                    score += 5;
                  }
                  else if (temp2 == "MFAB") {
                    score += 1;
                  }
                  scoreText.setText('Score:' + score);
                }
                  if(temp2 == "COM" || temp2 == "ENGINES" || temp2 == "PORT" || temp2 == "Guns" || temp2 == "COM2" || temp2 == "ENGINES2" || temp2 == "PORT2"){
                  game += 1;
                  if(game > 2){
                      th.sound.add('mwin').play();
                      if(localStorage.getItem(localStorageName) == null) {
                          highScore = 40;
                      } else {
                          highScore = localStorage.getItem(localStorageName);
                      }
                      if(score < highScore){
                        localStorage.setItem(localStorageName, score);
                      }
                      localStorage.setItem(localStorageTemp, score);
                      localStorage.setItem(localStoragePlayer, player);
                      window.location.href = "winv.html";
                  }
                  if(temp2 == "COM"){
                    th.sound.add('comp').play();
                    cc.visible = false;
                    if(player == 1){
                      mis1[0] = "NO";
                    }
                    else{
                      mis2[0] = "NO";
                    }
                  }
                  else if (temp2 == "ENGINES") {
                    th.sound.add('comp').play();
                    ce.visible = false;
                    if(player == 1){
                      mis1[1] = "NO";
                    }
                    else{
                      mis2[1] = "NO";
                    }
                  }
                  else if (temp2 == "PORT") {
                    th.sound.add('comp').play();
                    cp.visible = false;
                    if(player == 1){
                      mis1[2] = "NO";
                    }
                    else{
                      mis2[2] = "NO";
                    }
                  }
                  else if (temp2 == "Guns") {
                    th.sound.add('comp').play();
                    cg.destroy();
                  }
                  else if (temp2 == "COM2") {
                    th.sound.add('comp').play();
                    cc.destroy();
                  }
                  else if (temp2 == "ENGINES2") {
                    th.sound.add('comp').play();
                    ce.destroy();
                  }
                  else if (temp2 == "PORT2") {
                    th.sound.add('comp').play();
                    cp.destroy();
                  }
                  temp2 = "";
                }
                else{
                  var t = cards.indexOf(temp2);
                  cards.splice(t, 1);
                  cards.filter(val => val);
                  if(checkScore != "yes"){
                    pdis.push(temp2);
                  }
                  if (typeof cards[5] !== 'undefined') {
                    c5 = th.add.image(250, 400, cards[5]).setInteractive({ useHandCursor: true  } );
                    hove(c5, th, cards[5] + 'big');
                    select(c5, th, cards[5]);
                  }
                  else {
                    shuffle(dis);
                    cards = cards.concat(dis);
                    dis = [];
                    c5 = th.add.image(250, 400, cards[5]).setInteractive({ useHandCursor: true  } );
                    hove(c5, th, cards[5] + 'big');
                    select(c5, th, cards[5]);
                  }
                  c4 = th.add.image(375, 400, cards[4]).setInteractive({ useHandCursor: true  } );
                  hove(c4, th, cards[4] + 'big');
                  select(c4, th, cards[4]);
                  c3 = th.add.image(500, 400, cards[3]).setInteractive({ useHandCursor: true  } );
                  hove(c3, th, cards[3] + 'big');
                  select(c3, th, cards[3]);
                  c2 = th.add.image(625, 400, cards[2]).setInteractive({ useHandCursor: true  } );
                  hove(c2, th, cards[2] + 'big');
                  select(c2, th, cards[2]);
                  c1 = th.add.image(750, 400, cards[1]).setInteractive({ useHandCursor: true  } );
                  hove(c1, th, cards[1] + 'big');
                  select(c1, th, cards[1]);
                  c0 = th.add.image(875, 400, cards[0]).setInteractive({ useHandCursor: true  } );
                  hove(c0, th, cards[0] + 'big');
                  select(c0, th, cards[0]);
                }
                  var l = hand - card;
                  hand = l;
                  for (i = 0; i < temp.length; i++) {
                    var t = p.indexOf(temp[i]);
                    p.splice(t, 1);
                    p.filter(val => val);
                    pdis.push(temp[i]);
                  }
                  console.log(typeof p3);
                    if (typeof p0 !== 'undefined') {
                      p0.destroy();
                    }
                    if (typeof p1 !== 'undefined') {
                      p1.destroy();
                    }
                    if (typeof p2 !== 'undefined') {
                      p2.destroy();
                    }
                    if (typeof p3 !== 'undefined') {
                      console.log('did it');
                      p3.destroy();
                      //p3.visible = false;
                      console.log(p3);
                    }
                    if (typeof p4 !== 'undefined') {
                      p4.destroy();
                    }
                    if (typeof p5 !== 'undefined') {
                      p5.destroy();
                    }
                    if (typeof p6 !== 'undefined') {
                      p6.destroy();
                    }
                    if (typeof p7 !== 'undefined') {
                      p7.destroy();
                    }
                    if (typeof p7 !== 'undefined') {
                      p7.destroy();
                    }
                    if (typeof p8 !== 'undefined') {
                      p8.destroy();
                    }
                    if (typeof p9 !== 'undefined') {
                      p9.destroy();
                    }
                    if (typeof p10 !== 'undefined') {
                      p10.destroy();
                    }
                    if (typeof p11 !== 'undefined') {
                      p11.destroy();
                    }
                    if (typeof p12 !== 'undefined') {
                      p12.destroy();
                    }
                    if (typeof p13 !== 'undefined') {
                      p13.destroy();
                    }
                    if (typeof p14 !== 'undefined') {
                      p14.destroy();
                    }
                    if (typeof p15 !== 'undefined') {
                      p15.destroy();
                    }
                    if (typeof p16 !== 'undefined') {
                      p16.destroy();
                    }
                if(l > 15){
                  p15 = th.add.image(63, 550, p[15]).setInteractive({ useHandCursor: true  } );
                  hove(p15, th, p[15] + 'big');
                  bselect(p15, th, p[15] + 'big');
                }
                if(l > 7){
                  p7 = th.add.image(125, 550, p[7]).setInteractive({ useHandCursor: true  } );
                  hove(p7, th, p[7] + 'big');
                  bselect(p7, th, p[7]);
                }
                if(l > 8){
                  p8 = th.add.image(187, 550, p[8]).setInteractive({ useHandCursor: true  } );
                  hove(p8, th, p[8] + 'big');
                  bselect(p8, th, p[8]);
                }
                if(l > 0){
                  p0 = th.add.image(250, 550, p[0]).setInteractive({ useHandCursor: true  } );
                  hove(p0, th, p[0] + 'big');
                  bselect(p0, th, p[0]);
                }
                if(l > 9){
                  p9 = th.add.image(312, 550, p[9]).setInteractive({ useHandCursor: true  } );
                  hove(p9, th, p[9] + 'big');
                  bselect(p9, th, p[9]);
                }
                if(l > 1){
                  p1 = th.add.image(375, 550, p[1]).setInteractive({ useHandCursor: true  } );
                  hove(p1, th, p[1] + 'big');
                  bselect(p1, th, p[1]);
                }
                if(l > 10){
                  p10 = th.add.image(437, 550, p[10]).setInteractive({ useHandCursor: true  } );
                  hove(p10, th, p[10] + 'big');
                  bselect(p10, th, p[10]);
                }
                if(l > 2){
                  p2 = th.add.image(500, 550, p[2]).setInteractive({ useHandCursor: true  } );
                  hove(p2, th, p[2] + 'big');
                  bselect(p2, th, p[2]);
                }
                if(l > 11){
                  p11 = th.add.image(562, 550, p[11]).setInteractive({ useHandCursor: true  } );
                  hove(p11, th, p[11] + 'big');
                  bselect(p11, th, p[11]);
                }
                if(l > 3){
                  p3 = th.add.image(625, 550, p[3]).setInteractive({ useHandCursor: true  } );
                  hove(p3, th, p[3] + 'big');
                  bselect(p3, th, p[3]);
                }
                if(l > 12){
                  p12 = th.add.image(687, 550, p[12]).setInteractive({ useHandCursor: true  } );
                  hove(p12, th, p[12] + 'big');
                  bselect(p12, th, p[12]);
                }
                if(l > 4){
                  p4 = th.add.image(750, 550, p[4]).setInteractive({ useHandCursor: true  } );
                  hove(p4, th, p[4] + 'big');
                  bselect(p4, th, p[4]);
                }
                if(l > 13){
                  p13 = th.add.image(812, 550, p[13]).setInteractive({ useHandCursor: true  } );
                  hove(p13, th, p[13] + 'big');
                  bselect(p13, th, p[13]);
                }
                if(l > 16){
                  p16 = th.add.image(850, 550, p[16]).setInteractive({ useHandCursor: true  } );
                  hove(p16, th, p[16] + 'big');
                  bselect(p16, th, p[16]);
                }
                if(l > 5){
                  p5 = th.add.image(875, 550, p[5]).setInteractive({ useHandCursor: true  } );
                  hove(p5, th, p[5] + 'big');
                  bselect(p5, th, p[5]);
                }
                if(l > 14){
                  p14 = th.add.image(937, 550, p[14]).setInteractive({ useHandCursor: true  } );
                  hove(p14, th, p[14] + 'big');
                  bselect(p14, th, p[14]);
                }
                if(l > 6){
                  p6 = th.add.image(1000, 550, p[6]).setInteractive({ useHandCursor: true  } );
                  hove(p6, th, p[6] + 'big');
                  bselect(p6, th, p[6]);
                }
              coin = 0;
              skill = 0;
              total = 0;
              card = 0;
              ccard = 0;
              scard = 0;
              temp2 = "";
              red = "no";
              checkScore = "no";
              skillText.setText('Skill: ' + skill);
              coinText.setText('Coins: ' + coin);
              totalText.setText('Total: ' + total);
              cardText.setText('Cards: ' + card);
              }
            }
            else{
              setTimeout(function()
              {
                  th.sound.add(c["texture"]["key"]).play();

              }, 1000);
            }
          });
        //  return skill;
        //  return coin;
        }
        else{
        //  console.log(p3);
          th.socket.on('bsel', function (si6) {
            if(typeof p0 !== 'undefined' && p0['x'] == si6){
              p0.setTint(0x00ff00);
            }
            else if(typeof p1 !== 'undefined' && p1['x'] == si6){
              p1.setTint(0x00ff00);
            }
            else if(typeof p2 !== 'undefined' && p2['x'] == si6){
              p2.setTint(0x00ff00);
            }
            else if(typeof p3 !== 'undefined' && p3['x'] == si6){
              console.log(p3['isTinted']);
              if(p3['isTinted'] == false){
                p3.setTint(0x00ff00);
              }
              else{
                p3.clearTint();
              }
              //console.log(p3);
              //p3.setTint(0x00ff00);
              //console.log(p3.tintTopLeft);
            }
            else if(typeof p4 !== 'undefined' && p4['x'] == si6){
              p4.setTint(0x00ff00);
            }
            else if(typeof p5 !== 'undefined' && p5['x'] == si6){
              p5.setTint(0x00ff00);
            }
            else if(typeof p6 !== 'undefined' && p6['x'] == si6){
              p6.setTint(0x00ff00);
            }
            else if(typeof p7 !== 'undefined' && p7['x'] == si6){
              p7.setTint(0x00ff00);
            }
            else if(typeof p8 !== 'undefined' && p8['x'] == si6){
              p8.setTint(0x00ff00);
            }
            else if(typeof p9 !== 'undefined' && p9['x'] == si6){
              p9.setTint(0x00ff00);
            }
            else if(typeof p10 !== 'undefined' && p10['x'] == si6){
              p10.setTint(0x00ff00);
            }
            else if(typeof p11 !== 'undefined' && p11['x'] == si6){
              p11.setTint(0x00ff00);
            }
            else if(typeof p12 !== 'undefined' && p12['x'] == si6){
              p12.setTint(0x00ff00);
            }
            else if(typeof p13 !== 'undefined' && p13['x'] == si6){
              p13.setTint(0x00ff00);
            }
            else if(typeof p14 !== 'undefined' && p14['x'] == si6){
              p14.setTint(0x00ff00);
            }
            else if(typeof p15 !== 'undefined' && p15['x'] == si6){
              p15.setTint(0x00ff00);
            }
            else if(typeof p16 !== 'undefined' && p16['x'] == si6){
              p16.setTint(0x00ff00);
            }
          });
        }
      }
      var red = "no";
      var reds = "";
      function select(c, th, im){
        if(player == pl){
          c.on('pointerdown',function(pointer){
            th.sound.add('click').play();
            th.socket.emit('sel', c["texture"]["key"]);
            if(reds == c["texture"]["key"]){
              c.clearTint();
              reds = "";
              red = "no";
            }
            else if(c["texture"]["key"] != "EMP"){
              red = "yes";
              reds = c["texture"]["key"];
              if (typeof cc !== 'undefined') {
                cc.clearTint();
              }
              if (typeof ce !== 'undefined') {
                ce.clearTint();
              }
              if (typeof cp !== 'undefined') {
                cp.clearTint();
              }
              if (typeof cg !== 'undefined') {
                cg.clearTint();
              }
              if (typeof c0 !== 'undefined') {
                c0.clearTint();
              }
              if (typeof c1 !== 'undefined') {
                c1.clearTint();
              }
              if (typeof c2 !== 'undefined') {
                c2.clearTint();
              }
              if (typeof c3 !== 'undefined') {
                c3.clearTint();
              }
              if (typeof c4 !== 'undefined') {
                c4.clearTint();
              }
              if (typeof c5 !== 'undefined') {
                c5.clearTint();
              }
              if (typeof p0 !== 'undefined') {
                p0.clearTint();
              }
              if (typeof p1 !== 'undefined') {
                p1.clearTint();
              }
              if (typeof p2 !== 'undefined') {
                p2.clearTint();
              }
              if (typeof p3 !== 'undefined') {
                p3.clearTint();
              }
              if (typeof p4 !== 'undefined') {
                p4.clearTint();
              }
              if (typeof p5 !== 'undefined') {
                p5.clearTint();
              }
              if (typeof p6 !== 'undefined') {
                p6.clearTint();
              }
              if (typeof p7 !== 'undefined') {
                p7.clearTint();
              }
              if (typeof p8 !== 'undefined') {
                p8.clearTint();
              }
              if (typeof p9 !== 'undefined') {
                p9.clearTint();
              }
              if (typeof p10 !== 'undefined') {
                p10.clearTint();
              }
              if (typeof p11 !== 'undefined') {
                p11.clearTint();
              }
              if (typeof p12 !== 'undefined') {
                p12.clearTint();
              }
              if (typeof p13 !== 'undefined') {
                p13.clearTint();
              }
              if (typeof p14 !== 'undefined') {
                p14.clearTint();
              }
              if (typeof p15 !== 'undefined') {
                p15.clearTint();
              }
              if (typeof p16 !== 'undefined') {
                p16.clearTint();
              }
              if(c["texture"]["key"] == "COM" || c["texture"]["key"] == "ENGINES" || c["texture"]["key"] == "PORT" || c["texture"]["key"] == "Guns" || c["texture"]["key"] == "COM2" || c["texture"]["key"] == "ENGINES2" || c["texture"]["key"] == "PORT2"){
                c.setTint(0xff0000);
              }
              else{
                if(checkScore == "yes"){
                  c.setTint(0x0000ff);
                }
                else{
                  c.setTint(0xff0000);
                }
              }
              skill = 0;
              coin = 0;
              total = 0;
              card = 0
              scard = 0;
              ccard = 0;
              temp = [];
              skillText.setText('Skill: ' + skill);
              coinText.setText('Coins: ' + coin);
              totalText.setText('Total: ' + total);
              cardText.setText('Cards: ' + card);
                temp2 = c["texture"]["key"];
              if(c["texture"]["key"] == "IAM"){
                cost = 4;
                type = "coin";
              }
              else if (c["texture"]["key"] == "SRUM") {
                cost = 1;
                type = "skill";
              }
              else if (c["texture"]["key"] == "Browser") {
                cost = 2;
                type = "total";
              }
              else if (c["texture"]["key"] == "Malware") {
                cost = 8;
                type = "total";
              }
              else if (c["texture"]["key"] == "PrivilegeEsc") {
                cost = 10;
                type = "total";
              }
              else if (c["texture"]["key"] == "Driver") {
                cost = 4;
                type = "total";
              }
              else if (c["texture"]["key"] == "Service") {
                cost = 5;
                type = "total";
              }
              else if (c["texture"]["key"] == "CloudStorage") {
                cost = 3;
                type = "total";
              }
              else if (c["texture"]["key"] == "IMDS") {
                cost = 10;
                type = "total";
              }
              else if (c["texture"]["key"] == "MFA") {
                cost = 6;
                type = "coin";
              }
              else if (c["texture"]["key"] == "User") {
                cost = 4;
                type = "total";
              }
              else if (c["texture"]["key"] == "CloudAccount") {
                cost = 8;
                type = "total";
              }
              else if (c["texture"]["key"] == "CredStuffing") {
                cost = 4;
                type = "total";
              }
              else if (c["texture"]["key"] == "Kubelet") {
                cost = 2;
                type = "skill";
              }
              else if (c["texture"]["key"] == "WateringHole") {
                cost = 8;
                type = "total";
              }
              else if (c["texture"]["key"] == "WebShell") {
                cost = 1;
                type = "skill";
              }
              else if (c["texture"]["key"] == "FakeInstaller") {
                cost = 4;
                type = "skill";
              }
              else if (c["texture"]["key"] == "OfficeMacro") {
                cost = 1;
                type = "skill";
              }
              else if (c["texture"]["key"] == "ShadowCopy") {
                cost = 5;
                type = "skill";
              }
              else if (c["texture"]["key"] == "Sysmon") {
                cost = 4;
                type = "skill";
              }
              else if (c["texture"]["key"] == "Behavior") {
                cost = 5;
                type = "coin";
              }
              else if (c["texture"]["key"] == "DPAT") {
                cost = 4;
                type = "skill";
              }
              else if (c["texture"]["key"] == "Endpoint") {
                cost = 3;
                type = "coin";
              }
              else if (c["texture"]["key"] == "SIEM") {
                cost = 1;
                type = "coin";
              }
              else if (c["texture"]["key"] == "Sinkhole") {
                cost = 2;
                type = "coin";
              }
              else if (c["texture"]["key"] == "ZeroTrust") {
                cost = 6;
                type = "coin";
              }
              else if (c["texture"]["key"] == "MFAB") {
                cost = 10;
                type = "total";
              }
              else if (c["texture"]["key"] == "COM") {
                cost = 6;
                type = "skill";
              }
              else if (c["texture"]["key"] == "ENGINES") {
                cost = 6;
                type = "coin";
              }
              else if (c["texture"]["key"] == "PORT") {
                cost = 7;
                type = "card";
              }
              else if (c["texture"]["key"] == "Guns") {
                cost = 12;
                type = "total";
              }
              else if (c["texture"]["key"] == "COM2") {
                cost = 5;
                type = "scard";
              }
              else if (c["texture"]["key"] == "ENGINES2") {
                cost = 4;
                type = "ccard";
              }
              else if (c["texture"]["key"] == "PORT2") {
                cost = 3;
                type = "aq";
              }
            }
          });
        }
        else{
          console.log('player 2');
          th.socket.on('sel', function (si5) {
            console.log(si5);
            if(reds == si5){
              c.clearTint();
              reds = "";
              red = "no";
            }
            else if(si5 != "EMP"){
              red = "yes";
              reds = si5;
              if (typeof cc !== 'undefined') {
                cc.clearTint();
              }
              if (typeof ce !== 'undefined') {
                ce.clearTint();
              }
              if (typeof cp !== 'undefined') {
                cp.clearTint();
              }
              if (typeof cg !== 'undefined') {
                cg.clearTint();
              }
              if (typeof c0 !== 'undefined') {
                c0.clearTint();
              }
              if (typeof c1 !== 'undefined') {
                c1.clearTint();
              }
              if (typeof c2 !== 'undefined') {
                c2.clearTint();
              }
              if (typeof c3 !== 'undefined') {
                c3.clearTint();
              }
              if (typeof c4 !== 'undefined') {
                c4.clearTint();
              }
              if (typeof c5 !== 'undefined') {
                c5.clearTint();
              }
              if (typeof p0 !== 'undefined') {
                p0.clearTint();
              }
              if (typeof p1 !== 'undefined') {
                p1.clearTint();
              }
              if (typeof p2 !== 'undefined') {
                p2.clearTint();
              }
              if (typeof p3 !== 'undefined') {
                p3.clearTint();
              }
              if (typeof p4 !== 'undefined') {
                p4.clearTint();
              }
              if (typeof p5 !== 'undefined') {
                p5.clearTint();
              }
              if (typeof p6 !== 'undefined') {
                p6.clearTint();
              }
              if (typeof p7 !== 'undefined') {
                p7.clearTint();
              }
              if (typeof p8 !== 'undefined') {
                p8.clearTint();
              }
              if (typeof p9 !== 'undefined') {
                p9.clearTint();
              }
              if (typeof p10 !== 'undefined') {
                p10.clearTint();
              }
              if (typeof p11 !== 'undefined') {
                p11.clearTint();
              }
              if (typeof p12 !== 'undefined') {
                p12.clearTint();
              }
              if (typeof p13 !== 'undefined') {
                p13.clearTint();
              }
              if (typeof p14 !== 'undefined') {
                p14.clearTint();
              }
              if (typeof p15 !== 'undefined') {
                p15.clearTint();
              }
              if (typeof p16 !== 'undefined') {
                p16.clearTint();
              }
              if(cc["texture"]["key"] == si5){
                cc.setTint(0xff0000);
              }
              else if(ce["texture"]["key"] == si5){
                ce.setTint(0xff0000);
              }
              else if(cp["texture"]["key"] == si5){
                cp.setTint(0xff0000);
              }
              else if(c0["texture"]["key"] == si5){
                c0.setTint(0xff0000);
              }
              else if(c1["texture"]["key"] == si5){
                c1.setTint(0xff0000);
              }
              else if(c2["texture"]["key"] == si5){
                c2.setTint(0xff0000);
              }
              else if(c3["texture"]["key"] == si5){
                c3.setTint(0xff0000);
              }
              else if(c4["texture"]["key"] == si5){
                c4.setTint(0xff0000);
              }
              else if(c5["texture"]["key"] == si5){
                c5.setTint(0xff0000);
              }
              /*if(si5 == "COM" || si5 == "ENGINES" || si5 == "PORT" || si5 == "Guns" || si5 == "COM2" || si5 == "ENGINES2" || si5 == "PORT2"){
                c.setTint(0xff0000);
              }
              else{
                if(checkScore == "yes"){
                  c.setTint(0x0000ff);
                }
                else{
                  c.setTint(0xff0000);
                }
              }*/
            }
          });
        }
      }
      function start(th, cards, p){
        c5 = th.add.image(250, 400, cards[5]).setInteractive({ useHandCursor: true  } );
        hove(c5, th, cards[5] + 'big');
        select(c5, th, cards[5]);
        c4 = th.add.image(375, 400, cards[4]).setInteractive({ useHandCursor: true  } );
        hove(c4, th, cards[4] + 'big');
        select(c4, th, cards[4]);
        c3 = th.add.image(500, 400, cards[3]).setInteractive({ useHandCursor: true  } );
        hove(c3, th, cards[3] + 'big');
        select(c3, th, cards[3]);
        c2 = th.add.image(625, 400, cards[2]).setInteractive({ useHandCursor: true  } );
        hove(c2, th, cards[2] + 'big');
        select(c2, th, cards[2]);
        c1 = th.add.image(750, 400, cards[1]).setInteractive({ useHandCursor: true  } );
        hove(c1, th, cards[1] + 'big');
        select(c1, th, cards[1]);
        c0 = th.add.image(875, 400, cards[0]).setInteractive({ useHandCursor: true  } );
        hove(c0, th, cards[0] + 'big');
        select(c0, th, cards[0]);
        //var ma = ["COM", "COM2"];
        //shuffle(ma);
        cc = th.add.image(250, 250, "COM").setInteractive({ useHandCursor: true  } );
        hove(cc, th, "COM" + 'big');
        select(cc, th, "COM");
        //ma = ["ENGINES", "ENGINES2"];
        //shuffle(ma);
        ce = th.add.image(375, 250, "ENGINES").setInteractive({ useHandCursor: true  } );
        hove(ce, th, "ENGINES" + 'big');
        select(ce, th, "ENGINES");
        //ma = ["PORT", "PORT2"];
        //shuffle(ma);
        por = "PORT";
        /*if(ma[0] == "PORT2"){
          por = "PORT2";
        }*/
        cp = th.add.image(500, 250, "PORT").setInteractive({ useHandCursor: true  } );
        hove(cp, th, "PORT" + 'big');
        select(cp, th, "PORT");
        /*cg = th.add.image(625, 250, "Guns").setInteractive({ useHandCursor: true  } );
        hove(cg, th, 'Guns' + 'big');
        select(cg, th, 'Guns');*/
        p0 = th.add.image(250, 550, p[0]).setInteractive({ useHandCursor: true  } );
        hove(p0, th, p[0] + 'big');
        bselect(p0, th, p[0]);
        p1 = th.add.image(375, 550, p[1]).setInteractive({ useHandCursor: true  } );
        hove(p1, th, p[1] + 'big');
        bselect(p1, th, p[1]);
        p2 = th.add.image(500, 550, p[2]).setInteractive({ useHandCursor: true  } );
        hove(p2, th, p[2] + 'big');
        bselect(p2, th, p[2]);
        p3 = th.add.image(625, 550, p[3]).setInteractive({ useHandCursor: true  } );
        hove(p3, th, p[3] + 'big');
        bselect(p3, th, p[3]);
        console.log(p3["texture"]["key"]);
      }
      // functions //
      function shuffle(array) {
          var currentIndex = array.length, temporaryValue, randomIndex;
          while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
          }

          return array;
          }
      function hove(c, th, im){
        c.on('pointerover',function(pointer){
          big = th.add.image(865, 160, im).setInteractive();
        });
        c.on('pointerout',function(pointer){
          if (typeof big != "undefined") {
            big.destroy();
          }
          big = null;
        });
        back.on('pointerover',function(pointer){
          if (typeof big != "undefined") {
            big.destroy();
          }
          big = null;
        });
      }

      //starting//
      this.game.sound.stopAll();
      var cards = ["Browser", "Malware", "PrivilegeEsc", "Driver", "CloudStorage", "IMDS", "MFA", "User", "CloudAccount", "CredStuffing", "Kubelet", "WebShell", "FakeInstaller", "OfficeMacro", "ShadowCopy", "Sysmon", "Behavior", "DPAT", "Endpoint", "SIEM", "Sinkhole", "ZeroTrust", "IAM", "SRUM", "MFAB", "EMP"];
      var p = ["P1S", "P1S", "P1S", "P1S", "P1C", "P1C"];
      var player1 = ["P1S", "P1S", "P1S", "P1S", "P1C", "P1C"];
      var player2 = ["P2S", "P2S", "P2S", "P2S", "P2C", "P2C"];
      back = this.add.image(512, 320, 'back');
      skill = 0;
      th = this;
      coin = 0;
      total = 0;
      card = 0;
      scard = 0;
      ccard = 0;
      aq = 0;
      cost = 0;
      type = 0;
      health = 40;
      health1 = 40;
      health2 = 40;
      mis1 = ["yes","yes","yes"];
      mis2 = ["yes","yes","yes"];
      temp = [];
      temp2 = "";
      hand = 4;
      pdis = [];
      pdis1 = [];
      pdis2 = [];
      dis = [];
      red = "No";
      game = 0;
      game1 = 0;
      game2 = 0;
      score = 30;
      cscore = 0;
      checkScore = "no";
      player = 1;
      vs = "";
      pl = 1;
      var localStorageName = "piratesPort";
      var localStorageTemp = "piratesPort_temp";
      var localStoragePlayer = "piratesPort_player";
      var highScore;
      var healthText = this.add.bitmapText(250, 30, 'topaz', 'Health: 40', 48);
      //var scoreText = this.add.bitmapText(250, 90, 'topaz', 'Score: 30', 48);
      var serv = this.add.bitmapText(700, 40, 'topaz', 'Awaiting Player', 48);
      var playerText = this.add.bitmapText(700, 90, 'topaz', 'Player: 1', 48);
      var skillText = this.add.bitmapText(15, 65, 'topaz', 'Skill: 0', 32);
      var coinText = this.add.bitmapText(15, 90, 'topaz', 'Coins: 0', 32);
      var totalText = this.add.bitmapText(15, 115, 'topaz', 'Total: 0', 32);
      var cardText = this.add.bitmapText(15, 140, 'topaz', 'Cards: 0', 32);
      var r = this.add.bitmapText(800, 15, 'topaz', 'Rules', 32);
      mf = this.add.image(700, 25, 'musicOff').setInteractive({ useHandCursor: true  } );
      mo = this.add.image(750, 25, 'musicOn').setInteractive({ useHandCursor: true  } );
      fu = this.add.image(1000, 25, 'full').setInteractive({ useHandCursor: true  } );
      mu = this.sound.add('music');
      mu.loop = true;
      mu.play();
      mf.setScale(1/8);
      mo.setScale(1/8);
      fu.setScale(1/8);
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
      mo.on('pointerdown', () => {
        mu.loop = true;
        mu.play();
      });
      mf.on('pointerdown', () => {
        this.game.sound.stopAll();
      });
      r.setInteractive();
      r.on('pointerdown', () => {
        this.sound.add('click').play();
        var rule = this.add.image(512, 320, 'back');
        var vid = this.add.video(512, 320, 'rules').setInteractive({ useHandCursor: true  } );
        vid.setScale(1/2);
       vid.play(true);
       vid.setPaused(false);
        var hr = this.add.bitmapText(16, 16, 'topaz', 'Back', 32);
        hr.setInteractive({ useHandCursor: true  } );
        hr.on('pointerdown', () => {
          vid.destroy();
          vid = null;
          rule.destroy();
          rule = null;
          hr.destroy();
          hr = null;
        });
      });
      var h = this.add.bitmapText(15, 15, 'topaz', 'Home', 32).setInteractive({ useHandCursor: true  } );
      h.setInteractive();
      h.on('pointerdown', () => {
        this.sound.add('click').play();
        this.game.sound.stopAll();
        window.location.href = "game.html";
      });
      cb = this.add.image(125, 400, 'cb').setInteractive({ useHandCursor: true  } );
      hove(cb, this, 'cb');
      var tend = this.add.image(90, 200, 'END').setInteractive({ useHandCursor: true  } );
      //var tscore = this.add.image(825, 200, 'SCORE').setInteractive({ useHandCursor: true  } );
      tend.setScale(1/3);
      /*tscore.setScale(1/3);
      tscore.on('pointerdown', () => {
        this.sound.add('click').play();
        if(checkScore == "yes"){
          checkScore = "no";
        }
        else{
          checkScore = "yes";
        }
      });*/
  },
  update() {}
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
    scene: [ P1 ]
};
var game = new Phaser.Game(config);
