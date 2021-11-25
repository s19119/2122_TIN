var passedDirectory = process.argv.splice(2)[0];
const fs = require('fs');
fs.watch(passedDirectory,(eventType, fileName)=>{
    console.log(`File ${fileName} was modified`);
    fs.readFile(`${passedDirectory}/${fileName}`, 'utf8', (err, data) =>{
        if(err){
            console.log(`There was an error reading the file: ${fileName}`);
        }
        else{
            console.log(data);
        }
    });
});