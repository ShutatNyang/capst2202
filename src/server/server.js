const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const dbconn = require('./config/db.js')
const instantquery= require('./config/instantquerry')

app.get("/", (req, res) => {
  console.log("/root");
});

app.get("/users", (req, res) => {
  console.log("test");
  dbconn.query("select user_id from users", (err, data) => {
    if (!err) {
      console.log(data);
    } else {
      console.log(err);
    }
  });
  instantquery("select user_id from users",console.log)
});


app.listen(PORT, () => {
  console.log(`Server On : http://localhost:${PORT}`);
});
