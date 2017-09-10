// aws config
const aws = require('aws-sdk');
const config = require('./config.js');
const path = require('path');
const fs = require('fs');

aws.config.update({
    "accessKeyId": config.AWS_ACCESS_KEY, // process.env.AWS_ACCESS_KEY,
    "secretAccessKey": config.AWS_SECRET_KEY, // process.env.AWS_SECRET_KEY,
    "region": config.AWS_REGION // process.env.AWS_REGION
});

const s3 = new aws.S3();

const filename = process.argv[2];

// grab the ile data
var file = fs.readFileSync(filename);

// get the name for the file
var name = path.basename(filename);

var image_url = "https://s3-" + config.AWS_REGION + '.amazonaws.com/' + config.AWS_BUCKET + '/' + name;

var params = {
    "Bucket": config.AWS_BUCKET,
    "Key": name,
    "Body": file,
    "ContentType": "image/png",
    "ACL": "public-read"
};

s3.putObject(params, function (err, res) {
    if (err) {
        console.log("Error uploading data: ", err);
    } else {
        console.log("Successfully uploaded data to ", 'https://shots.ohthatsnice.net/' + name);
    }
});
