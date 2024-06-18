import React, { useState  } from 'react'
import { Link } from 'react-router-dom'


const Reg = () => {
  const [username, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")

 

  function handleform(e) {
    e.preventDefault()
    const formdata = { username, password }
    setUserName("")
    setPassword("")

    


    fetch("/api/Register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formdata)
    }).then((res) => { return res.json() }).then((data) => {
      console.log(data)
      if (data.status == 201) {
        setMessage(data.message)
      } else {
        setMessage(data.message)
      }
   
    })
   
  }
 


  return (

    <div className='container' id="regform">
      <div className='row'>
        
        <div className='col-md-4'></div>
        <div className='col-md-4'>
     
              <p id="popupmsg"> {message}</p>
          <form onSubmit={(e) => { handleform(e) }} >
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">username</label>
              <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={username} onChange={(e) => { setUserName(e.target.value) }} classNameName='form-control' required />
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e) => { setPassword(e.target.value) }} classNameName='form-control' required  />
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary form-control">Register</button>
            <Link to="/Login"><button type="submit" className="btn btn-success mt-2 form-control">Login</button></Link>
          </form>
        </div>
        <div classNameName='col-md-4'></div>
      </div>
    </div>

  )
}

export default Reg