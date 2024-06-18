import React from 'react'
import {Link} from "react-router-dom"

const Left = () => {
  return (
    <div className='col-md-3'> 
        <button className='btn btn-secondary mt-5 ms-4'><Link to="/adminProductform">Product-Form</Link></button>
        <button className='btn btn-secondary mt-5 me-5'><Link to="/adminshowtabledata">Products-Details</Link></button>
    </div>
  )
}

export default Left