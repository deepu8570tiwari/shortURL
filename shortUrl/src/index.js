const express= require("express");
const dotenv=require("dotenv");
dotenv.config();
const connectDB=require("./configs/database");
const urlRouter=require("./routes/urlRouter");
const app=express();
app.use(express.json());
app.use("/api/v1/",urlRouter);
app.get("/", (req, res) => {
    res.send("Hello Your code is working");
});

app.listen(process.env.NODE_PORT, ()=>{
    console.log("Server is running on Port",`${process.env.NODE_PORT}`)
    connectDB();
})