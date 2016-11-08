'use strict';

const request = require("request");
const fs = require("fs");

request.get("https://sytantris.github.io/http-examples/future.jpg")               // Note 1
  .on("error", function (err) {                                   // Note 2
   console.log(err);
  })
  .on("response", function (response) {                           // Note 3
   console.log(response.statusMessage, response.headers["content-type"]);
  })
  .pipe(fs.createWriteStream("./future.jpg"))
