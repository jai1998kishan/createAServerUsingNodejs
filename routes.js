const fs=require('fs');

const requestHandler=(req,res)=>{
    const url=req.url;
    const method=req.method;
    if(url==='/'){
        res.write('<html>');
        res.write('<head><title>Enter Msg</title><head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form><body>');
        res.write('</html>');
        return res.end();
    }
    if(url==='/message' && method==='POST'){
        const body=[];
        req.on('data',(chunk)=>{
            console.log(chunk);
            body.push(chunk);
        })
        return req.on('end',()=>{
            const parsedBody=Buffer.concat(body).toString();
            const message=parsedBody.split('=')[1];
            fs.writeFile('message.txt',message,(err)=>{
                res.statusCode=302;      //this and below line use for redirecting the rquests or page
                res.setHeader('Location','/');
                return res.end();
            });
            
        })
        
        
    }
    res.setHeader('content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title><head>');
    res.write('<body><h1>Hello from my Node.js server!</h1><body>');
    res.write('</html>');
    res.end();
    // res.write()   //it will show error  if we add the `end` than we are not able to write anything after that
    
}

//ways 1 to export the file
// module.exports=requestHandler;

//way 2 to export the file
// module.exports={
//     handler:requestHandler,
//     someText:'Some hard coded text'
// }

//way 3 to export the file
module.exports.handler=requestHandler;
module.exports.someText='Some hard coded text in way 3';
// //short for above code
// exports.handler=requestHandler;
// exports.someText='Some hard coded text in way 3';

