// Use this workspace to submit your homework for Week 1: Assignment 2: Git + GitHub Basics
//let ourHttp = require('http');
import http from 'http';

let ourServer = http.createServer(

  (req, res) => {
    console.log(req.url);
    res.writeHead(
      200,
      {
        'Content-Type': 'text/plain'
      }
    );
    
    if (req.url === '/') {
      res.end('Hello Home!');
    } else if (req.url === '/posts') {
      res.end('Hello Posts!');
    } else if (req.url === '/docs') {
      res.end('Hello Docs!');
    } else {
      res.end('Hello World!');
    }
  }
);

ourServer.listen(
  80, "0.0.0.0"
)