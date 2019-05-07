const express = require("express");

const server = express();

const postsRouter = require("./Posts/postsRouter");

server.use(express.json());
server.use("/api/posts", postsRouter);

server.get('/', (req, res) => res.send("API up and running!")); 

module.exports = server;