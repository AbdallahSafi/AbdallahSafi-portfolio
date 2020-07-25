"use strict";

// Decalaring varaible to use express
const express = require("express");
const { request, response } = require("express");

// initialize the server
const server = express();

// Declare a port
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log("I am listening to port: ", PORT);
});

server.use(express.static('./public'));

// localhost:3000/test
server.get("/test", (request, response) => {
  response.send("You are awesome!");
});

// localhost:3000/data
server.get("/data", (request, response) => {
  let cars = [
    {
      name: "ferrary",
    },
    {
        name: "ford",
      }
  ];
  response.json(cars);
});
