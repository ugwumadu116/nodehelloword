var express = require("express");

var app = express();
const PORT = process.env.PORT || 3001;

app.get("/", function(req, res) {
  res.send("Hi Joel your welcome to this node starter app");
});

app.listen(PORT, function() {
  console.log(`Express app - listening on port ${PORT}`);
});
