// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// rate limit the requests from a user to only 5 request per second
// If a user sends more than 5 requests in a single second, the server
// should block them with a 404.
// User will be sending in their user id in the header as 'user-id'
// You have been given a numberOfRequestsForUser object to start off with which
// clears every one second

const express = require("express");
const app = express();

const db = new Map(); // queue of Time

app.use((req, res, next) => {
  const userid = req.headers["user-id"];

  const curTime = Date.now();
  if (!db.has(userid)) {
    db.set(userid, [curTime]);
  } else {
    let ar = [];
    ar = db.get(userid);
    while (ar.length > 0 && curTime - ar[0] > 1000) {
      ar.shift();
    }
    ar.push(curTime);
    db.set(userid, ar);
    if (ar.length >= 5) {
      res.status(404).send("Request limit per second exceed!");
    }
  }

  next();
});

app.get("/user", function (req, res) {
  res.status(200).json({ name: "john" });
});

app.post("/user", function (req, res) {
  res.status(200).json({ msg: "created dummy user" });
});

module.exports = app;

// app.listen(3000, () => console.log("listening at 3000"));
