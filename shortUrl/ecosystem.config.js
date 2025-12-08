import dotenv from "dotenv";
dotenv.config();

module.exports = {
  apps: [
    {
      name: "short-url",
      script: "./src/index.js",
      env: {
        MONGO_DB: process.env.MONGO_DB,
        NODE_PORT: process.env.NODE_PORT,
      }
    }
  ]
};
