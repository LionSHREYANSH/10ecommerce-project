import React, { useContext, useEffect, useState } from 'react'

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import { contextapi } from '../Contextapi';



const UserProductpage = () => {
  const [product, setProduct] = useState([])
  const [message, setMessage] = useState()
  useEffect(() => {
    fetch("/api/usershowlist").then((res) => { return res.json() }).then((data) => {
      console.log(data)
      if (data.status === 200) {
        setProduct(data.apiData)
      } else {
        setMessage(data.message)
      }
    })

  }, [])

  const {cart,setCart } =useContext(contextapi)

function handlecart(e , productid){
    // console.log(productid)
   

   
let _cart = {...cart}

if(!_cart.item){
_cart.item={}
}

if(!_cart.item[productid]){
_cart.item[productid] = 1
}

else{
_cart.item[productid] +=1
}

if(!_cart.totalitems){
_cart.totalitems = 1
}

else{
_cart.totalitems +=1

}

setCart(_cart)
console.log(cart)
}



  return (
    <div className='container' >
      <div className=' row'>
        {product.map((product , key) => (
          <div className='col-md-4 mt-3' id="usercard">
            <MDBCard>
              <MDBCardImage src={`upload/${product.PImage}`} position='top' alt='...' />
              <MDBCardBody>
                <MDBCardTitle>{product.PTitle}</MDBCardTitle>
                <MDBCardText>
                 <p>{product.PDesc}</p>
                </MDBCardText>
                <MDBCardText>
                Price : $  <p>{product.PPrice}</p>
                </MDBCardText>
                <MDBBtn  onClick={(e)=>{handlecart(e , product._id)}}>Add To Cart</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </div>
        ))

        }

      </div>
    </div>




  )
}

export default UserProductpage