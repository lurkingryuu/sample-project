const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io')

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});

io.on("connection", (socket)=>{
    console.log(`USER CONNECTED: ${socket.id}`);

    socket.on("btn_clik", (data) => {
        console.log("btn_clik recieved");
        socket.emit("display_btn", data);
        console.log(`display_btn for Button ${data} was Clicked`);
    })

    socket.on("disconnect", ()=>{
        console.log("USER DISCONNECTED: ", socket.id);
    });
});






server.listen(6969, ()=>{
    console.log("SERVER RUNNING");
})
