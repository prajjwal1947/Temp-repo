const {readFile,writeFile, copyFileSync}=require('fs')

readFile('./Content/First.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
   const First=result;
   readFile('./Content/Second.txt/','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const second=result;
    writeFile('./Content/result-async.txt',`here is the result :${first},${second}`,(err,result)=>{
        if(err){
            console.log(err);
        }
        console.log(result);
    })
   })
})