import dotenv from "dotenv";
dotenv.config();
module.exports = {
  apps: [
    {
      name: "short-url",
      instances: 1,
      autorestart: true,
      watch: false,
      script: "./src/index.js",
      env: {
        MONGO_URI: process.env.MONGO_URI,
        NODE_PORT: process.env.NODE_PORT,
      }
    }
  ]
};
