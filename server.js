var mongo = require("mongodb").MongoClient,
    client = require("socket.io").listen(8080).sockets;

client.on("connection", function(socket) {
  console.log("Test cxn");
});

// https://youtu.be/GkXQEwHn2nA?t=6m54s
