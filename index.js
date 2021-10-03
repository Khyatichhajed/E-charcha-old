// express to start the server
const app=require("express")();
const server=require("http").createServer(app);
// for cross origin req
const cors=require("cors");
// for real time data connection
const io=require("socket.io")(server,{
    cors:{
        origin:"*",
        methods:["GET","POST"]
        // get and post for client and server side communication
    }
});
app.use(cors());
const PORT=process.env.PORT||5000;
app.get("/",(req,res)=>{
    res.send('server is running');
});
// while connecting the call following things will happen
io.on("connection",(socket)=>{
    // on connection shows our id name
    socket.emit("me",socket.id);
    // on disconnection shows callended
    socket.on("disconnect",()=>{
        socket.broadcastemit("callEnded");
    });
    // on calling the user shows user details
    socket.on("callUser",({userToCall,signalData,from,name})=>{
        io.to(userToCall).emit("callUser",{signal:signalData,from,name})
    });
    // on answering the call "callAccepted" will emit
    socket.on("answerCall",(data)=>{
        io.to(data.to).emit("callAccepted",data.signal)
    });
});
server.listen(PORT,()=> console.log(`Server listening on port ${PORT}`));