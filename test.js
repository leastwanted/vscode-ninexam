const fs = require('fs');
const path = require('path');

function walkSync(dir){
    console.log('called somethings');
    let files = fs.readdirSync(dir);
    console.log(files);
    files.forEach(file => {
        console.log(file);
        let filepath = path.join(dir, file);
        if (fs.statSync(filepath).isDirectory()){
            walkSync(filepath);
        }else{
            console.log(filepath);
        }
    });
};
console.log(walkSync);
walkSync('/d:/projects/hexo');