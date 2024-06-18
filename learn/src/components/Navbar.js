
import React, { useContext } from "react"
import { contextapi } from "../Contextapi"
import { Link, useNavigate } from "react-router-dom"

const Navbar = () => {
const navigate = useNavigate()
  const { loginName, setLoginName  , cart} = useContext(contextapi)

  function handleLogout(e) {
    setLoginName(localStorage.removeItem("loginname"))
    // setLoginName(localStorage.getItem("loginname"))
    navigate("/Login")
  }

  return (
    <div id="navbar">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><i class="bi bi-amazon"></i></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {loginName?
              <>
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">cart:{cart.totalitems}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Register</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Login">Login</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="#">{loginName}</Link>
              </li>

              <li className="nav-item">
                <button className="btn btn-dark" id="logoutbutton" onClick={(e) => { handleLogout(e) }}><Link className="nav-link " to="#" >Logout</Link></button>
              </li>
              </>
              :
              <h1></h1>
}
            </ul>
           








          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar