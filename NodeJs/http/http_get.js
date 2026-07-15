const http = require("http");

const server = http.createServer((req, res) => {

  //   res.end("response from http server");

  if (req.url === "/") {
    res.end("This is home page");
  }
  else if(req.url === "/about"){
    res.end("This is about page");
  }
  else if(req.url === "/login"){
    res.end("This is Login page");
  }
  else if(req.url === "/signup"){
    res.end("This is Signup page");
  }

});

server.listen(3000,()=>console.log("Server is running on 3000"));
