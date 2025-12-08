require("dotenv").config();
module.exports = {
  apps: [
    {
      name: "short-url",
      script: "./src/index.js",
      env: {
        MONGO_DB: process.env.MONGO_DB,
        PORT: process.env.PORT,
      }
    }
  ]
};
