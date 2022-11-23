const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const dbconn = require('./config/db.js')


app.get("/", (req, res) => {
  console.log("/root");
});

app.get("/users", (req, res) => {
  console.log("test");
  dbconn.query("select uId from users", (err, data) => {
    if (!err) {
      console.log(data);
    } else {
      console.log(err);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server On : http://localhost:${PORT}`);
});
