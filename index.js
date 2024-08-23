// Use this workspace to submit your homework for Week 1: Assignment 2: Git + GitHub Basics
//let ourHttp = require('http') 
//or using ES6 module syntax
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

    let result;
    if (req.url === '/') {
      result = 'Hello Home!';
    } else if (req.url === '/posts') {
      result = 'Hello Posts!';
    } else if (req.url === '/docs') {
      result = 'Hello Docs!';
    } else {
      result = 'Hello World!';
    }
    res.end(result);
  }

);

ourServer.listen(
  80, "0.0.0.0"
);