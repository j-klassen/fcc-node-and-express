'use strict';

// PARAM PAM PAM
// Exercise 6 of 8

// Create an Express.js server that processes PUT '/message/:id' requests.

// For instance:

//   PUT /message/526aa677a8ceb64569c9d4fb

// As a response to these requests, return the SHA1 hash of the current date
// plus the sent ID:

//   require('crypto')
//     .createHash('sha1')
//     .update(new Date().toDateString() + id)
//     .digest('hex')

const express = require("express");
const app = express();
const port = process.argv[2];

app.put('/message/:id', (req, res) => {
  res.end(
    require('crypto')
      .createHash('sha1')
      .update(new Date().toDateString() + req.params.id)
      .digest('hex')
  );
});

app.listen(port);