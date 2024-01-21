require("dotenv").config();

const express = require("express");
const ws = require('ws');
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");

const port = process.env.PORT || 8080;

const patient = require("./routes/patient");
const call = require("./routes/call");

dotenv.config();

const app = express();

const wsServer = new ws.Server({ noServer: true });
wsServer.on('connection', socket => {
  socket.on('message', message => console.log(message));
});

app.use(cors({}));

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use(`/${process.env.CONTEXT_PATH}/${process.env.AWID}/patient`, patient);

app.use(`/${process.env.CONTEXT_PATH}/${process.env.AWID}/call`, call);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    const server = app.listen(port, () => {
      console.log("Connected to db & listening on port", port.toString());
    });
    server.on('upgrade', (request, socket, head) => {
        wsServer.handleUpgrade(request, socket, head, socket => {
        wsServer.emit('connection', socket, request);
      });
    });
  })
  .catch((error) => {
    console.log(error);
  });

