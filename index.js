const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path')
require('dotenv').config() ; 


const app = express();
const server = http.createServer(app);
const io = socketIo(server);


app.use(express.static(path.join(__dirname,'public')));

app.set('view engine', 'ejs') ;


const port = process.env.PORT || 5000;

// app.use(express.json());
// app.use(express.urlencoded({extended:true}))



// app.use(function(req, res, next){
//     console.log("middleware is going on") ;
//     next() ;
// })

 

app.get('/',(req,res)=>{
    res.render('index');
})

 
 
io.on('connection', (socket) => {
    console.log('someone connected!',socket);
 
    socket.on('sendMessage', (message) => {
        console.log('message  received',message);
 
        io.emit('receiveMessage', message);
    });
   

    socket.on('disconnect', () => {
        console.log('client Disconnected');
    });
  });

  
 
 

server.listen(port,()=>{
    console.log(`server is started at port http://localhost:${port}`);
})
 