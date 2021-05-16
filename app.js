const express = require("express");

const app = express();
const db = require("./config/config.db");
db();
app.use(express.json());
const userRouter = require("./routes/user.routes");
app.use("/", userRouter);

app.listen(Number(process.env.PORT), () =>
  console.log(`Server up and running at port ${process.env.PORT}`)
);
