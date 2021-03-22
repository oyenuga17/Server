const http = require("http");
const port = 2220;

const server =  http.createServer((req,res) => {
    //server can requests and accept responses
    //console.log(req);
    const {headers, url, method}= req;  
     console.log( "headers:")
     console.log ( headers);
     console.log(url);
     console.log (method);
     res.end();

  //To set header
res.setHeader ("Content-Type", "text/html")
res.write (<h1> "Hello Aminat" </h1>)
res.end();
});


server.listen(port,() =>{
console.log (`server is now ready to listen  ${port}`);});
//crud operation - create read update delete -most important in dev

server.listen  //picks two parameter, one callback and another a port.
