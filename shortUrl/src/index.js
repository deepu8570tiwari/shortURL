const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const connectDB = require("./configs/database");
const urlRouter = require("./routes/urlRouter");

const app = express();
app.use(express.json());
app.use("/api/v1/", urlRouter);

app.get("/", (req, res) => {
  res.send("Hello! Your code is working just checking");
});

// Connect to DB first, then start server
const PORT = process.env.NODE_PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
