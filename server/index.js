const express = require('express');
const app = express();
const cors = require('cors')
const path = require('path')
const http = require('http');
const socket = require('socket.io');
const server = http.createServer(app);
const io = socket(server);
const communitychat = io.of('/community');
require('./db/mongoose');

// routes
const userRouter = require('./routes/user');
const communityRouter = require('./routes/community')
const postRouter = require('./routes/post');
const communityChat = require('./routes/chat');
const commentRouter = require('./routes/comment')


const port = 8000;


app.use(express.static(__dirname + '/public'))
app.use(cors())
app.use(express.json())
app.set('views', path.join(__dirname, 'views'))
app.set('view engine','ejs')

app.use(communityChat);
app.use('/api',userRouter);
app.use('/api', communityRouter);
app.use('/api',postRouter);
app.use('/api', commentRouter)

communitychat.on('connection',(socketio) => {

    socketio.on('community-join', (join) => {
        socketio.join(join.joinId)
    })

    socketio.on('community-newMsg', (msg) => {
        communitychat.to(msg.id).emit('community-msg', {name:msg.name,text:msg.text,id:msg.id})
        // socketio.broadcast.to(msg.id).emit('community-msg', {name:msg.name,text:msg.text})
    })
})

server.listen(port, () => {
    console.log('server running at ' + port)
})

