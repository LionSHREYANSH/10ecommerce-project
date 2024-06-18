const Product = require("../models/products")



exports.admininsertform = (req,res)=>{
  const {pname , pdesc , pprice , pqty , pstatus} = req.body
  const filename = req.file.filename
  try{
  const record = new Product({PTitle  : pname ,  PDesc : pdesc ,  PPrice : pprice , PQuantity : pqty ,  PStatus  : pstatus , PImage : filename })
    record.save()
    res.json({
        status : 201 , 
        apiData : record, 
        message : "you Product is successfully inserted"

    })
}catch(error){
    res.json({
        status : 400 , 
        message : error.message
    })
}
}

exports.adminshowdetails = async(req,res)=>{
    try{
const record = await Product.find()
res.json({
    status : 200 , 
    apiData : record , 
    message : "User Details"
})
    }catch(error){
        res.json({
            status : 400 , 
            message : error.message
        })
    }
}

exports.adminproductdelete = async(req,res)=>{
    const id = req.params.id
    try{
    await Product.findByIdAndDelete(id)
    res.json({
        status : 200 , 
        message : "successfully deleted"
    })
    }catch(error){
        res.json({
            status : 400 , 
            message : error.message
        })
    }
}

exports.singleproductupdate = async(req,res)=>{
    const id = req.params.id
try{
    const record = await Product.findById(id)
    res.json({
        status : 200 , 
        apiData : record
    })
}
catch(error){
   res.json({
    status : 400 , 
    message : error.message
   })
}
}

exports.adminfinalupdate = async(req,res)=>{
    const id = req.params.id
    const {pname , pdesc , pprice , pqty , pstatus} = req.body
    const filename = req.file.filename
    try{
        if(req.file){
        await Product.findByIdAndUpdate( id ,{PTitle  : pname ,  PDesc : pdesc ,  PPrice : pprice , PQuantity : pqty ,  PStatus  : pstatus , PImage : filename })
        }else{
            await Product.findByIdAndUpdate( id, {PTitle  : pname ,  PDesc : pdesc ,  PPrice : pprice , PQuantity : pqty ,  PStatus  : pstatus })
       
        }
        res.json({
            status : 200 , 
            message : "successfully Product Updated"
        })
    }catch(error){
        res.json({
            status : 400 , 
            message: error.message
        })
    }
       
    
  
}

exports.usershowlist = async(req,res)=>{
    try{
        const record =  await Product.find()
        res.json({
                status : 200 , 
                apiData : record
        })
    }catch(error){
        res.json({
                status : 500 , 
                message : error.message
        })
    }


}
