const Reg = require("../models/reg")
const bcrypt = require("bcrypt")

exports.register=async(req,res)=>{
    const{username , password} = req.body
    try{
    const checkpass =await bcrypt.hash(password , 10)
    const usercheck = await Reg.findOne({username : username})
     console.log(usercheck)
    if(usercheck==null){
        const record = new Reg({username : username , password : checkpass})
        record.save()
        res.json({
            status : 201 , 
            apiData : record , 
            message : "register successfully"
        })
    }else{
        res.json({
            status : 404 , 
            message : "username is already taken"
        })
    }


    }catch(error){
        res.json({
            status : 400 , 
            message : error.message
        })
    }

}

exports.Login=async(req,res)=>{
    const {username , password} = req.body
    const record = await Reg.findOne({username : username})
    try{
    if(record!==null){
        const ismatched = await bcrypt.compare(password , record.password)
        //console.log(ismatched)
        if(ismatched){
        res.json({
            status : 200 , 
            apiData : record.username , 
            message : "Login successfully" 
        })
    }else{
        res.json({
            status : 400 , 
            message : " oops.. something went  wrong"
        })
    }
      
    }else{
        res.json({
            status : 400 , 
            message : " oops.. something went  wrong"
        })
    }
}catch(error){
    res.json({
        status: 404 ,
        message : error.message
    })
}
}
