const socket=io();

setTimeout(()=>{
console.log(socket.id);
},500)

document.getElementById("messagearea").style.display="none";

function clicked(){
    socket.emit('msg-sent',{
     msg:document.getElementById("inp").value
    })
}

function auth(){
    socket.emit('login',{
        name:document.getElementById("login").value
    })
    document.getElementById("loginarea").style.display="none";
    document.getElementById("messagearea").style.display="block";
}

socket.on('msg-recieved',(data)=>{
    var li = document.createElement('li');
    var br = document.createElement('br');
    li.innerHTML = data.name +" : "+data.msg;  
    li.style.textAlign="justify";
    document.getElementById('chat').append(li);
    document.getElementById('inp').value="";
    document.getElementById('chat').append(br);
})
    
