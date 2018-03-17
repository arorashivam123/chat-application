const path=require('path');
const publicPath=path.join(__dirname,'../public');
const port=process.env.PORT||3000;
const express=require('express');
const socketIO=require('socket.io');
const app=express();
const http=require('http');
app.use(express.static(publicPath));
const server=http.createServer(app);
//we are specifying server we are gonna use io sockets
const io=socketIO(server);
// connection is to check active connection and socket is passed in reference to var declared in html page
io.on('connection',(socket)=>{
 console.log('New User connected');

//sending message to client side

socket.on('createMessage',(message)=>{
  console.log('createMessage',message);
  io.emit('newMessage',{
    from:message.from,
    text:message.text,
    createdAt:new Date().getTime()
  });
});


//on disconnection from client
socket.on('disconnect',()=>{
  console.log("disconnected from client");
});

});


//For Starting the server
server.listen(port,()=>{
  console.log('server is running at port:'+port);
});
