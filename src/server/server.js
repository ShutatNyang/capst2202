const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const db = require('./config/db.js');

app.get("/", (req, res) => {
  console.log("/root");
});

app.get("/users", (req, res) => {
  console.log("test");
  db.query("select * from users", (err, data) => {
    console.log(data);
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
