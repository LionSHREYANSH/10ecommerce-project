import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import Left from "./Left"

const AdminProduct_insert_Form = () => {


  const [pname, setPname] = useState("")
  const [pdesc, setPdesc] = useState("")
  const [pprice, setPprice] = useState("")
  const [pqty, setPqty] = useState("")
  const [pstatus, setPstatus] = useState("")
  const [pimg, setPimg] = useState("")
  const [message, setMessage] = useState("")

  const navigate = useNavigate()

  function handleform(e) {
    e.preventDefault()
    console.log(pname, pdesc, pprice, pqty, pstatus)



    let Data = new FormData()

    Data.append("pname", pname)
    Data.append("pdesc", pdesc)
    Data.append("pprice", pprice)
    Data.append("pqty", pqty)
    Data.append("pstatus", pstatus)
    Data.append("pimg", pimg)

    fetch("/api/adminproductinsertform", {
      method: "POST",
      body: Data
    }).then((res) => { return res.json() }).then((data) => {
      // console.log(data)
      if (data.status === 201) {
        setMessage(data.message)
        navigate("/adminshowtabledata")

      } else {
        setMessage(data.message)

      }
    })




  }
  return (
    <div className='container'>
      <div className="row justify-content-md-center mt-4">
        <Left />
        <div className='col-md-9'>
          <h5 style={{ textAlign: "center", color: "white" }}>{message}</h5>
          <form onSubmit={(e) => { handleform(e) }}>
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

            <button type="submit" className='form-control btn btn-primary mt-2'>Submit Products</button>


          </form>
        </div>
      </div>
    </div>
  )
}

export default AdminProduct_insert_Form