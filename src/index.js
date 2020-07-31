require("dotenv").config();



const mongoose = require("mongoose");
const express = require("express");
mongoose.Promise = require('bluebird');
const router = express.Router();
const app = express();

const http = require("http").Server(app);
const setupWebSocket = require("./setup-websocket");
mongoose.connect('mongodb+srv://admin:imgcrawler@cluster0.as2fg.mongodb.net/imgcrawler?retryWrites=true&w=majority')
const Schema = mongoose.Schema;
app.use(express.json());
setupWebSocket(http);

mongoose
  .connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    try {
      return http.listen(process.env.PORT, listenPort);
    } catch (e) {
      return e;
    }
  })
  .catch((e) => e);

const listenPort = (err) => {
  if (err) return err;
  if (process.env.ENVIROMENT === "development") {
    console.log(`Runing on port: ${process.env.PORT}`);
  }
};
