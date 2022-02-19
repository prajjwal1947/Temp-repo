
const{readFileSync,writeFileSync, readSync}=require('fs');
const first =readFileSync('./Content/First.txt','utf8');
// const second=readSync('./Content/Second.txt','utf8');
const second=readFileSync('./Content/Second.txt','utf8');
console.log(first,second); 
writeFileSync('./Content/result-sync.txt',`here is the result :${first},${second}`,{flag:'a'})