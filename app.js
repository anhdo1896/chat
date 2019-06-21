var express = require('express');
var app = express()
var auth=require('./routers/auth.route')
app.use(express.static("public"))
app.set("view engine","ejs")
app.set("views","./views")
var server = require("http").Server(app);
var io = require("socket.io")(server)
server.listen(3000)
app.use('/', auth)
var socketio = require('./routers/socketio.route')
socketio.register(io)
socketio.login(io)
socketio.logout(io)
socketio.sendMess(io)
module.exports = app;