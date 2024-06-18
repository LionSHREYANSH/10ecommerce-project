import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom"


const AdminProductsdetails = () => {

  const navigate = useNavigate()
  const [product , setProduct] = useState([])
 const [message , setMessage] =  useState()
useEffect(()=>{
  fetch("/api/adminshowdetails").then((res)=>{return res.json()}).then((data)=>{
    console.log(data)
    if(data.status === 200){
        setProduct(data.apiData)
    }else{
      setMessage(data.message)
    }
  })
} , [])

function handledelete(e , id){
    fetch(`/api/adminproductdelete/${id}`,{
      method : "DELETE"
    }) .then((res)=>{return res.json()}).then((data)=>{
        if(data.status === 200){
          setMessage(data.message)
          navigate("/adminshowtabledata")
        }else{
          setMessage(data.message)
        }
    })
}

 
  return (
<div className=' container'>
    <div className="row justify-content-md-center mt-4">
  
        <div className='col-md-9'>
        <table className="table table-dark">
  <thead>
    <tr>
        <th scope="col">Product Image</th>
      <th scope="col">Product Title</th>
      <th scope="col">Product Description</th>
      <th scope="col">Product Price</th>
      <th scope="col">Product Quantity</th>
      <th scope="col">Product Status </th>
      <th scope="col"> Product Remove </th>
      <th scope="col"> Product Edit </th>
    
    </tr>
  </thead>
  
    <tbody>
     {product.map((item)=>(
          <tr>
        
          <td><img src={`upload/${item.PImage } ` } alt='img' id="adminshowimg"/></td>
          <td>{item.PTitle}</td>
          <td>{item.PDesc}</td>
          <td>{item.PPrice}</td>
          <td>{item.PQuantity}</td>
          <td>{item.PStatus}</td>
          <td><Link to={ `/adminproductdelete/${item._id}`}><button  className='btn btn-danger' onClick={(e)=>{handledelete(e , item._id)}}><i class="bi bi-trash3"></i></button></Link></td>
          <td><Link to={ `/adminproductupdate/${item._id}`}><button  className='btn btn-primary' ><i class="bi bi-pencil-fill"></i></button></Link></td>
    
        </tr>
     ))}
           

   
  
  
  </tbody>

  
</table>
        </div>
    </div>
</div>
  )
}

export default AdminProductsdetails