import {Manager} from 'socket.io-client'
let incre = 0

const manager = new Manager("localhost:8880",{
    autoConnect:true,
    forceNew:true,
    transports:['websocket'],
    reconnection:true,
    reconnectionDelay:5000
})

const socket = manager.socket("/")

manager.open((err)=>{
    if(err){
        console.log(err)
    }
})

socket.on("connect",()=>{
    console.log(`[${socket.id}] Connected `)
})

socket.on('connect_error',(err)=>{
    console.log(err)
})

setInterval(()=>{
    socket.emit("hey",{
        date: new Date().toLocaleString(),
        data: {
            incre: incre++,
            random: Math.random(100,200)
        }
    })
},100)




