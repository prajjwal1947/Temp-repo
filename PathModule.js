const path=require('path');
console.log(path.sep);



const  fIlePath=path.join('/Content','Sub-Folder','test.txt')
console.log(fIlePath);


const base=path.basename(fIlePath);
console.log(base);

const absolute=path.resolve(__dirname,'Content','Sub-Folder','test.txt')
console.log(absolute);