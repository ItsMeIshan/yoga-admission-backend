const env = require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./routes/routes");
const sequelize = require("./db/database");
const Customer = require("./models/customer");
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/v1", router);
sequelize
  .sync()
  .then((result) => {
    console.log("connection success");
    app.listen(PORT, () => {
      console.log("server listening on port 5000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
