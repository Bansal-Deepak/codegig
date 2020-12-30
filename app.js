const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
const { PORT } = process.env;
const port = PORT || 5000;

const { db } = require("./db");

let { router: gigsRouter } = require("./routes/gigs");
app.use("/gigs", gigsRouter);

db.authenticate()
  .then(() => {
    console.log("connnection to postgres is established");
    app.listen(port, () => {
      console.log(`app is running successfully on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(`unable to connect as ${err}`);
  });
