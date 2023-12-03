import express from "express";
import Errormiddleware from './middleware/error.js'
import user from "./routes/userroute.js"
import uploadfile from "./routes/awsroute.js"
import path from "path"
import {fileURLToPath} from "url"
const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename)
import cors from "cors"
import cookieParser from "cookie-parser";
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({
    origin:'*'
}))
app.use(cookieParser())

app.use('/api',user);
app.use("/api",uploadfile)

app.use(express.static(path.join(__dirname,"../../db-tool/build")));
app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"../../db-tool/build/index.html"))
})

app.use(Errormiddleware)
export default app;