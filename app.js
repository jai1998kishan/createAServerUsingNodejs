const http=require('http');

//you can also create that
// function rqListener(req,res){

// }
// http.createServer(rqListener);


//you can also create Annonyonous function also
// http.createServer(function(req,res){

// });


//you can also use arrow function
const server=http.createServer((req,res)=>{
    console.log(req.url,req.method,req.headers);
    // process.exit();           //it will exit the server and know one able to access it again
    res.setHeader('content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title><head>');
    res.write('<body><h1>Hello from my Node.js server!</h1><body>');
    res.write('</html>');
    res.end();
    // res.write()   //it will show error  if we add the `end` than we are not able to write anything after that


});

server.listen(3000); 

// const server=http.createServer((req,res)=>{
//     console.log("Jaikishan Gupta");
// })

// server.listen(4000);