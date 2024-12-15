const express = require("express");
const app = express();
const cors = require("cors");
require("./conn/conn");
const path = require("path");
const https= require('https')
const fs = require('fs')
const auth = require("./routes/auth");
const list = require("./routes/list");
app.use(express.json());
app.use(cors());

app.use("/api/v1", auth);
app.use("/api/v2", list);


app.get("/", (req, res) => {
  app.use(express.static(path.resolve(__dirname, "frontend", "build")));
  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
});

app.listen(1000, () => {
  console.log("Server Started");
});

const sslServer = https.createServer(
  {
  key: fs.readFileSync(path.join(__dirname, 'cert', 'localhost-key.pem')),
  cert: fs.readFileSync(path.join(__dirname, 'cert', 'localhost.pem')),
}, app)

sslServer.listen(3443, () => console.log('Secure server on port 3443'))

