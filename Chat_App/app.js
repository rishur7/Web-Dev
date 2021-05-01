const express=require('express');
const socketio=require('socket.io');
const http=require('http');
const app=express();
const server=http.Server(app);
const io=socketio(server);
const path=require('path');

app.use('/',express.static(path.join(__dirname,'static')));
const mapping={}
io.on('connection',(socket)=>{
    console.log(`${socket.id} is connected`);

   socket.on('login',(data)=>{
       mapping[socket.id]=data.name
   })
    
   socket.on('msg-sent',(data)=>{
        io.emit('msg-recieved',{
         name:mapping[socket.id],
         msg:data.msg
        }) 
    })
})

server.listen(7070, () => {
    console.log('Server running at port 7070');
})
