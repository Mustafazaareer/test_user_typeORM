import express from 'express';
import userRouter from './routes/users.js';

const PORT =5050;

const server =express();

server.use(express.json());

server.use('/user', userRouter);


server.get('/',(req:express.Request,res:express.Response,next:express.NextFunction)=>{
    res.send("server running")
})

server.listen(PORT,()=>{
    console.log(`server running at port: ${PORT}`)
})

export default server;