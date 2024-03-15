import express from "express";
import routes from './routes/route.js'
import { connectToDB } from "./connectToDB/connectToDB.js";

const app = express();

app.use(express.json()); 
app.use('/', routes)

app.listen(3000,()=>{
    connectToDB();
    console.log("Connected To server")
})