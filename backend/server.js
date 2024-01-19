require("dotenv").config();

const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");

const port = process.env.PORT || 8080;

const patient = require("./routes/patient");
const call = require("./routes/call");

dotenv.config();

const app = express();

app.use(cors({}));

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// app.use(`/001/${process.env.AWID}`);

app.use("/001/patient", patient);

app.use(`/${process.env.CONTEXT_PATH}/${process.env.AWID}/call`, call);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(port, () => {
      console.log("Connected to db & listening on port", port.toString());
    });
  })
  .catch((error) => {
    console.log(error);
  });

