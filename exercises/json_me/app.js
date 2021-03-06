'use strict';

// JSON ME
// Exercise 8 of 8

// Write a server that reads a file, parses it to JSON and outputs the content
// to the user.

// The port is passed in process.argv[2].  The file name is passed in process.argv[3].

// Respond with:

//   res.json(object)

// Everything should match the '/books' resource path.

const express = require("express");
const fs = require("fs");
const app = express();

const port = process.argv[2];
const file = process.argv[3];

app.get('/books', (req, res) => {
  let stream = fs.createReadStream(file);
  let buffer = '';
  
  stream.on('error', (err) => {
    throw err;
  });
  
  stream.on('data', (chunk) => {
    buffer += chunk;
  });
  
  stream.on('end', () => {
    let obj = JSON.parse(buffer.toString());
    res.json(obj);
  });
});

app.listen(port);