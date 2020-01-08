// REQUIRED LIBRARIES
const http = require("http");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();
const authRouter = require("./routes/auth/auth");
const passport = require("passport");

// API IMPLANT
app.get("/", (req, res) => {
  res.send("youhou");
});

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));

app.use("/auth", authRouter);
app.get("/profile", passport.authenticate("jwt", { session: false }), function(
  req,
  res
) {
  res.send(req.user);
});

/// 404 NOT FOUND
app.use(function(req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// NODE LAUNCH
let server = app.listen(process.env.PORT || 3001, function() {
  console.log("Listening on port " + server.address().port);
});
