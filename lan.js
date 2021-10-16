const express = require('express')
const { shell } = require("electron");
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const port = 3000
const os = require("os");
const ifaces = os.networkInterfaces();
var players = {};
var holding = [];
console.log(__dirname + '/www');
app.use('/', express.static(__dirname + '/www'))

io.on('connection', function (socket) {
console.log('a user connected');

players[socket.id] = "no";
holding.push(socket.id);
if(holding.length > 1){
  var a = holding.shift();
  var b = holding.shift();
  players[a] = b;
  players[b] = a;
  io.to(a).emit("player", 1);
  io.to(b).emit("player", 2);
  io.to(a).emit("vs", b);
  io.to(b).emit("vs", a);
}


socket.on('cards', function (cards) {
  io.to(players[socket.id]).emit('cards', cards);
});
socket.on('p', function (p) {
  io.to(players[socket.id]).emit('p', p);
});
socket.on('sel', function (c) {
  //console.log(c);
  io.to(players[socket.id]).emit('sel', c);
});
socket.on('bsel', function (c) {
  console.log(c);
  io.to(players[socket.id]).emit('bsel', c);
});

// send the players object to the new player
//socket.emit('currentPlayers', players);
// update all other players of the new player
//socket.broadcast.emit('newPlayer', players);
socket.on('disconnect', function () {
  console.log('user disconnected');
  io.to(players[socket.id]).emit("dis", "yes");
  delete players[socket.id];
  console.log(players);
  //socket.broadcast.emit('goodbye', players);
});
});

//gui
server.listen(port, () => {
  console.log('listening on *:3000');
});

Object.keys(ifaces).forEach(function (ifname) {
  var alias = 0;

  ifaces[ifname].forEach(function (iface) {
    if ("IPv4" !== iface.family || iface.internal !== false) {
      // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
      return;
    }
    var myIP = "";
    var cmyIP = "";
    var amyIP = "";
    if (alias >= 1) {
      // this single interface has multiple ipv4 addresses
      cmyIP += `http://${iface.address}:${port}`;
    } else {
      // this interface has only one ipv4 adress
      cmyIP += `http://${iface.address}:${port}`;
    }
    ++alias;
    //console.log(cmyIP);
    document.getElementById("localAdd").innerHTML = '<u>' + cmyIP + '</u>';
    document.getElementById("localAdd").onclick = function() {shell.openExternal(cmyIP);};
    /*$("#localAdd").text(cmyIP);
    $("#localAdd").click(function () {
      shell.openExternal(cmyIP);
    });*/
  });
});
