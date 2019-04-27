var express = require("express");

var app = express();

var PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });