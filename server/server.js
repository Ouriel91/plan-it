const express = require("express");
const cors = require("cors");
const logger = require('./middlewares/logger.js');
const path = require('path');
const bodyParser = require("body-parser");
const planRouter = require("./routes/plan-router.js");
const db = require("./db/models")
const port = 8083;
const app = express();

app.use([cors(), express.json(), logger]);
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/plan", planRouter);

app.use(express.static(path.resolve(__dirname, '../client/build')))

app.get('/', (req, res) => {
  res.status(200).json({
      status: 'OK'
  })
})

app.listen(process.env.PORT ||  port, () => {
  console.log(`Server is Running on Port: http://localhost:${process.env.PORT ||port  }`);
});


setInterval(async function () {
  try {
    //await db.sequelize.query("SELECT 1;")
  } catch (e) {
    console.log(e);
  }
}, 10000);
