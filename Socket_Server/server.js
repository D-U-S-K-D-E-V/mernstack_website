import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const httpServer = http.createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:4000",
        methods: ["GET", "POST"],
        allowedHeaders: ["myTestHeader"],
        credentials: true
    }
});

const port = 8000;
const users = [];
const conversation = [];

io.on("connection", (socket) => {

    console.log('Connection Established!')

    socket.on("numbers", (data) => {
        console.log(data)
    })

    socket.on("userStatus", (userData) => {
        const parsedData = JSON.parse(userData)
        users.push(parsedData)
        console.log(users)
        console.log(`${parsedData.name} is connected!`)
    })

    socket.on("messages", (data) => {
        const parsedData = JSON.parse(data)
        conversation.push(parsedData)
        socket.emit("messageData", conversation)
        console.log(conversation)
    })

    socket.on('disconnect', () => {
        console.log(socket.id)
        console.log('Im Feeling So Disconected')
    })
})

httpServer.listen(port, () => console.log(`Server is running on port: ${port}`));