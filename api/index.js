const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const http = require("http");

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb+srv://ronald:ronald@cluster0.tenlsqe.mongodb.net/")
  .then(() => console.log("DB Connected"))
  .catch((err) => console.error("DB Connection Error: "));

const userRoutes = require("./routes/user.routes");
app.use("/api/users", userRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
