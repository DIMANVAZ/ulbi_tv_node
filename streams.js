const fs = require('fs');
const path = require("path");
const readStream = fs.createReadStream(path.join(__dirname,'fileToRead.txt'), {encoding:'utf-8'});
const writeStream = fs.createWriteStream(path.join(__dirname,'fileFromStream.txt'), {encoding:'utf-8'});

readStream.on('data', (chunk)=> {
   console.log('!')
});

readStream.on('end', ()=>console.log('end'));

readStream.pipe(writeStream);