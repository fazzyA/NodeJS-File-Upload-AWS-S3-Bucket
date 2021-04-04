require('dotenv/config')
const AWS = require('aws-sdk')
const uuid = require('uuid').v4;

const s3 = (process.env.NODE_ENV == "development") ? 
    new AWS.S3({
        credentials: {
            accessKeyId: process.env.AWS_ACCESS_KEY,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        },
    })
    :
    new AWS.S3()
    var params = { 
        Bucket: process.env.AWS_BUCKET_NAME,
        Delimiter: '',
        Prefix: '*' 
      }

s3.listObjects(params, function (err, data) {
    if(err)throw err;
    console.log(data);
  });