// dotenv allows us to declare environment variables in a .env file, \
// find out more here https://github.com/motdotla/dotenv
require("dotenv").config();
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import passport from "passport";
import authenticationRoutes from "./routes/AuthenticationRoutes";
const cors = require("cors");


mongoose.set("debug", true);
mongoose.Promise = global.Promise;
// mongoose.connect("mongodb://localhost/bogobyzip");
mongoose.connect("mongodb://localhost/WestBankPools");

// mongoose.connect("mongodb://gdevany:gdevany@ds133964.mlab.com:33964/bogobyzip");

const app = express();
app.use(express.static("public"));
app.use(cors());
app.options("*", cors());

app.use(bodyParser.json());

app.use(authenticationRoutes);

const authStrategy = passport.authenticate("authStrategy", { session: false });
app.use(authStrategy);

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send(err.message);
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
