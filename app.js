// const http=require('http');
// const fs=require('fs');



//you can also create that
// function rqListener(req,res){

// }
// http.createServer(rqListener);


//you can also create Annonyonous function also
// http.createServer(function(req,res){

// });


//you can also use arrow function
// const server=http.createServer((req,res)=>{
    // console.log(req);
    // console.log(req.url);
    // console.log(req.method);
    // console.log(req.headers);
    // console.log(req.url,req.method,req.headers);
    
    // process.exit();           //it will exit the server and know one able to access it again
    
    // const url=req.url;
    // const method=req.method;
    // if(url==='/'){
    //     res.write('<html>');
    //     res.write('<head><title>Enter Msg</title><head>');
    //     res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form><body>');
    //     res.write('</html>');
    //     return res.end();
    // }
    // if(url==='/message' && method==='POST'){
    //     const body=[];
    //     req.on('data',(chunk)=>{
    //         console.log(chunk);
    //         body.push(chunk);
    //     })
    //     return req.on('end',()=>{
    //         const parsedBody=Buffer.concat(body).toString();
    //         const message=parsedBody.split('=')[1];
    //         fs.writeFile('message.text',message,(err)=>{
    //             res.statusCode=302;      //this and below line use for redirecting the rquests or page
    //             res.setHeader('Location','/');
    //             return res.end();
    //         });
            
    //     })
        
        
    // }
    // res.setHeader('content-Type','text/html');
    // res.write('<html>');
    // res.write('<head><title>My First Page</title><head>');
    // res.write('<body><h1>Hello from my Node.js server!</h1><body>');
    // res.write('</html>');
    // res.end();
    // res.write()   //it will show error  if we add the `end` than we are not able to write anything after that


// });

// server.listen(3000); 

// const server=http.createServer((req,res)=>{
//     console.log("Jaikishan Gupta");
// })

// server.listen(4000);






//cleaning the code
const http=require('http');
//the below code is costume file
const routes=require('./routes');
const server=http.createServer(routes);
server.listen(3000); 