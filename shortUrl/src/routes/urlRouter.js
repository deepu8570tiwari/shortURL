const express=require("express");
const router=express.Router();
const {createShorts,redirectTolongUrl,getAnalystics}=require("../controllers/urlController");
router.post("/urls",createShorts);
router.get("/urls/:shortId",redirectTolongUrl);
router.get("/urls/analytics/:shortId",getAnalystics);
module.exports=router;