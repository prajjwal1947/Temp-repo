const http=require('http');
const server =http.createServer((req,res)=>{
    if(req.url=='/'){
        res.end('Welcome to my home page')
    }
    if(req.url=='/about'){
       res.end('Here is short note on mine')
    }

 res.end(`
 <h1>Ooops!</h1>
 <p>You are the wrong  place </p>
 <a href="/">back Home</a>
 `)
})
server.listen(5000);