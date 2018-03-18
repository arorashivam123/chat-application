var socket=io();
socket.on('connect',function(){
 console.log('Connected');


socket.on('newMessage',function(data){
  console.log('newMessage',data);
});

});
socket.on('disconnect',function(){
 console.log('DisConnected');
});
