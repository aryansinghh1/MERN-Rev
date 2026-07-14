const http = require("http");

const server = http.createServer((req, res) => {
    
  //   res.end("response from http server");

  if (req.url === "/") {
    res.end("This is home page");
  }
  else if(req.url === "/about"){
    res.end("This is about page");
  }

});

server.listen(3000);
