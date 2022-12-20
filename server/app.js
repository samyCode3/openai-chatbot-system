const express = require("express");
const app = express();
const control = require("../src/route/routes");
const { ErrorHandler } = require("../error/errorHandler");
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = process.env.PORT;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is my AI space");
});
const db = require("../config/db.config").MongoURL;
mongoose.Promise = global.Promise;
mongoose.set('strictQuery', true)
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("connected to mongo database"))
  .catch((err) => console.log(err));

app.use(
  cors({
    origin: "*",
  })
);
app.use("/api/v1", control);
app.use((req, res, next) => {
  if (res.status(404)) {
    return res.send("When you are trying to get what u don't have ");
  }
  next();
});
app.use(ErrorHandler);

app.listen(PORT, console.log(`server running on port ${PORT}`));
