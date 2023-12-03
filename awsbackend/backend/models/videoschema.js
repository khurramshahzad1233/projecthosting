import mongoose from "mongoose";
const kittySchema=new mongoose.Schema({
    videourl:[
        {
            url:{
                type:String,
                required:[true,"url is missing"]
            }
        },
    ],
    systeminformation:[
        {
            sysinfo:{
                type:String,
            }
        }
    ],
    analysisoption:[
        {
            analysisopt:{
                type:String,
            }
        }
    ],
    email:{
        type:String,
    },
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"

    },
    createdAt:{
        type:Date,
        default:Date.now,
    }

})
const videodata=mongoose.model("video",kittySchema);
export default videodata;