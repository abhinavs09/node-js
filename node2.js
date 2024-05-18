// module.exports ={
//       x : 9,
//       y : 7
// }

//Make a basic server 

const http = require('http');
http.createServer((req, res)=>{
    res.write("<h1>Hello, This is Abhinav </h1>");
    res.end();
}).listen(45);