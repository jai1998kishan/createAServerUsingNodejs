const http=require('http');

//you can also create that
// function rqListener(req,res){

// }
// http.createServer(rqListener);


//you can also create Annonyonous function also
// http.createServer(function(req,res){

// });


//you can also use arrow function
// const server=http.createServer((req,res)=>{
//     console.log(req);
// });

// server.listen(3000);

const server=http.createServer((req,res)=>{
    console.log("Jaikishan Gupta");
})

server.listen(4000);