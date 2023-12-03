import catchasyncerror from "../middleware/catchasyncerror.js";
import Errorhandler from "../utils/errorhandler.js";
import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
import {getSignedUrl} from "@aws-sdk/s3-request-presigner"
import dotenv from "dotenv"
import videodata from "../models/videoschema.js";
import userdata from "../models/userschema.js";
if(process.env.NODE_ENV!=="PRODUCTION"){
    dotenv.config({path:"backend/config.env"})
};

const client = new S3Client({
    region:"us-east-1",
    credentials:{
        accessKeyId:"AKIA3SNMGC5JMW3REJ3U",
        secretAccessKey:"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",
    }
});


export const getfilecontroller=catchasyncerror(async(req,res,next)=>{
    const videourldata=await videodata.find({})
    if(videourldata.length===0){
        return res.status(200).json({
            success:true,
            message:"no files found"
        })
    }
    const commanddata=[]
    for(let i=0; i<videourldata.length; i++){
        commanddata.push(videourldata[i].videourl)
    }

    let command=[]
    let command1=commanddata.flat(1);
    for(let i=0; i<command1.length; i++){
        command.push(command1[i].url)
    }

    const commandurl=[];
    
    for(let i=0; i<command.length; i++){
        const singleurl=decodeURIComponent(command[i]);
        commandurl.push(singleurl)
    }

    

    const urlArray=[];
    for(let i=0; i<commandurl.length; i++){
        const keyparts=commandurl[i].split("/");
        // const userid=keyparts[3];
        const filename=keyparts[4];
        const command=new GetObjectCommand({
            Bucket:process.env.bucket,
            Key: `uploads/${filename}`,

        });
        const url = await getSignedUrl(client, command);
        urlArray.push(url)
        

    }

      res.status(200).json({
        success:true,
        urlArray:urlArray
    })
});



export const uploadobjectcontroller=catchasyncerror(async(req,res,next)=>{
    const email = req.body.email !== undefined && req.body.email !== null ? req.body.email : '';
    let systeminformation = req.body.systeminformation !== undefined && req.body.systeminformation !== null ? req.body.systeminformation : '';
    const analysisoption = req.body.analysisoption !== undefined && req.body.analysisoption !== null ? req.body.analysisoption : '';
   const fileUrls=req.files.map((file)=>file.location);
   
   

let videourl=[];
let system=[];
let analysis=[]
 
for(let i=0; i<fileUrls.length; i++){
    videourl.push({
        url:fileUrls[i]
    })
    };
    console.log(systeminformation)
    if(systeminformation.length>0){
        let systeminfo=systeminformation.split(',')
for(let i=0; i<systeminfo.length; i++){
    system.push({
        sysinfo:systeminfo[i]
    })
}
    }

    if(analysisoption.length>0){
        let analysisop=analysisoption.split(',')
for(let i=0; i<analysisop.length; i++){
    analysis.push({
        analysisopt:analysisop[i]
    })
}
    }
    


    
req.body.videourl=videourl;
req.body.systeminformation=system;
req.body.analysisoption=analysis;
req.body.email=email;
    try {
        
            await videodata.create(req.body)          
        
        
    } catch (error) {
        return res.status(400).json({
            success:false,
            message:"database not connected"
        })
        
    }
    

  res.status(200).json({
    success:true,
    fileUrls:fileUrls
  })


})


export const getobjectofusercontroller=catchasyncerror(async(req,res,next)=>{
    const user=await userdata.findById(req.user.id);
    if(!user){
        return next(new Errorhandler("please login to access the resource",400))
    };
    const videosarray=(await user.populate("videos")).videos;
    if(videosarray.length===0){
        return res.status(200).json({
            success:true,
            message:"no file found"
        })
    };
    let videourls=[]
    for(let i=0;i<videosarray.length;i++){
        const urlloc=decodeURIComponent(videosarray[i].videourl) 
        videourls.push(urlloc)
    }
    const urlArray=[];
    for(let i=0; i<videourls.length; i++){
        const keyparts=videourls[i].split("/");
        const userid=keyparts[4];
        const filename=keyparts[5];
        const command=new GetObjectCommand({
            Bucket:process.env.bucket,
            Key: `uploads/${userid}/${filename}`,

        });
        const url = await getSignedUrl(client, command);
        urlArray.push(url)
        

    }
    res.status(200).json({
        success:true,
        urlArray:urlArray
    })
})
