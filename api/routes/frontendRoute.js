const router = require("express").Router()
const regc  = require("../controllers/register")
 const Productc = require("../controllers/productControllers")
 const multer = require("multer")

 const Storage = multer.diskStorage({
 destination :(req , file , cb)=>{
 cb(null, "./public/upload"); 
 },
 
 filename : function(req,file,cb){
 cb(null , Date.now()+file.originalname);
 
 }
 })
 
 
 let upload = multer({
 
 storage :Storage , 
 limits :{
 filesize : 1024*1024*4
 
 }
 
 })




// const Products = require("../models/products")

router.post("/Register" ,regc.register)
router.post("/Login", regc.Login)
router.post("/adminproductinsertform" ,upload.single("pimg"),Productc.admininsertform )
router.get("/adminshowdetails",Productc.adminshowdetails)
router.delete("/adminproductdelete/:id",Productc.adminproductdelete)
router.get("/singleproductupdate/:id" , Productc.singleproductupdate)
router.put("/adminupdate/:id",upload.single("pimg"),Productc.adminfinalupdate)
router.get("/usershowlist",Productc .usershowlist)

module.exports = router