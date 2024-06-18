import React, { useEffect, useState } from 'react'

import { useNavigate, useParams } from 'react-router-dom'


const Aupdateform = () => {
 
    const [pname, setPname] = useState("")
    const [pdesc, setPdesc] = useState("")
    const [pprice, setPprice] = useState("")
    const [pqty, setPqty] = useState("")
    const [pstatus, setPstatus] = useState("")
    const [pimg, setPimg] = useState("")
    const [message, setMessage] = useState("")

   const navigate =  useNavigate()
   const {id }= useParams()
   useEffect(()=>{
    fetch(`/api/singleproductupdate/${id}`).then((res)=>{return res.json()}).then((data)=>{
      
        if(data.status==200){
            setPname(data.apiData.PTitle)
            setPdesc(data.apiData.PDesc)
            setPprice(data.apiData.PPrice)
            setPqty(data.apiData.PQuantity)
            setPimg(data.apiData.PImage )
            setPstatus(data.apiData.PStatus)
          
        }else{
            setMessage(data.message)
        }
        })
   },[])
 
   function handleupdate(e){
    e.preventDefault()
   
    let Data1 = new FormData()

    Data1.append("pname", pname)
    Data1.append("pdesc", pdesc)
    Data1.append("pprice", pprice)
    Data1.append("pqty", pqty)
    Data1.append("pstatus", pstatus)
    Data1.append("pimg", pimg)
        
    fetch(`/api/adminupdate/${id}`,{
        method : "PUT",
        body : Data1
    }).then((res)=>{return res.json()}).then((data)=>{
     if(data.status===200){
        setMessage(data.message)
        navigate("/adminshowtabledata")
     }else{
        setMessage(data.message)
     }
    })
   }


   
  return (
    
    <div className='container'>
    
      <div className="row justify-content-md-center mt-4">
  
        <div className='col-md-9'>
          {/* <h5 style={{ textAlign: "center", color: "white" }}>{message}</h5> */}
   
          <form onSubmit={(e)=>{handleupdate(e)}}>
            <label>Product Title</label>
            <input type="text" className='form-control' value={pname} onChange={(e) => { setPname(e.target.value) }} />
            <label>Product Description</label>
            <input type="text" className='form-control' value={pdesc} onChange={(e) => { setPdesc(e.target.value) }} />
            <label>Product Price</label>
            <input type="number" className='form-control' value={pprice} onChange={(e) => { setPprice(e.target.value) }} />
            <label>Product Quantity</label>
            <input type="number" className='form-control' value={pqty} onChange={(e) => { setPqty(e.target.value) }} />
            <label>Product Image </label>
            <input type="file" className='form-control' onChange={(e) => { setPimg(e.target.files[0]) }} />
            <label>Product Status</label>
            <input type="text" className='form-control' value={pstatus} onChange={(e) => { setPstatus(e.target.value) }} />

            <button type="submit" className='form-control btn btn-primary mt-2'>update your product</button>


          </form>
        </div>
      </div>
    </div>

  )
}

export default Aupdateform