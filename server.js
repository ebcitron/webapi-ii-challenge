const express = require("express");

const server = express();

const postsRoutes = require("./Posts/postsRouter");

server.use(express.json());
server.use("/api/posts", postsRoutes);

server.use('/', (req, res) => res.send('API Is Up And Running!'));

module.exports = server;