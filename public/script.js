        
//        function def(){
//           document.querySelector("#input").style.border="1px solid red";

// }   
 var username = prompt("Enter your name for Chat"); 
 console.log(username)
 username.innHTML= `<sub></sub>`
    const socket =  io();
     var inp =   document.querySelector("#input");
     var btn = document.querySelector("#btn");

    //  inp.addEventListener('click',()=>{
    //   inp.style.border="1px solid red";
    //  })
  
     btn.addEventListener('click',function(){
       ;
        // console.log( inp.value ) ;
        socket.emit('sendMessage',username+ inp.value ) ;
        inp.value = '' ;
        username= '' ;
     }) ;

 socket.on('receiveMessage', (message)=>{
   var chatbox =  document.querySelector("#main") ;
   var newdiv =  document.createElement("h2") ; 
   newdiv.textContent = message ; 
   console.log(newdiv)
   chatbox.appendChild(newdiv);

 //  socket.on('disconnect', () => {
 //   alert('server Disconnected');

 // });  it is working when i destroy/stop my server ;

 })

 
 