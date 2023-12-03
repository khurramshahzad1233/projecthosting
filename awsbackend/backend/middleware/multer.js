import multer from "multer";
import multerS3 from "multer-s3"
import {S3Client} from "@aws-sdk/client-s3";

const client = new S3Client({
    region:"us-east-1",
    credentials:{
        accessKeyId:"AKIA3SNMGC5JMW3REJ3U",
        secretAccessKey:"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"
    }
});
const upload=multer({
    storage:multerS3({
        s3:client,
        bucket:"database-services-new",
        metadata: function (req,file,cb) {
            cb(null, {fieldName:file.fieldname});
        },
        key:function(req,file,cb){
            // const userid=req.user.id
            // cb(null,`uploads/${userid}/`+Date.now().toString()+file.originalname)
            cb(null,`uploads/`+Date.now().toString()+file.originalname)
        }
    })
})

export default upload;