import {BrowserRouter as Router ,  Route , Routes}  from "react-router-dom"
import Navbar from "./components/Navbar";
import Reg from "./components/Reg"
import Login from "./components/Login"
import { contextapi } from "./Contextapi"; 
import { useEffect, useState } from "react";
import AdminDashboard from "./components/AdminDashboard";
import UserProductpage from "./components/UserProductpage";
import AdminProduct_insert_Form from "./components/AdminProduct_insert_Form";
import AdminProductsdetails from "./components/AdminProductsdetails";
import Aupdateform from "./components/Aupdateform";










function App() {
const [cart , setCart] = useState() 


useEffect(()=>{localStorage.setItem("cart" ,JSON.stringify(cart))},[cart])
 const [loginName , setLoginName] = useState(localStorage.getItem("loginname"))

  return (
    <div className="App">
  
      <Router> 
     <contextapi.Provider value={{loginName , setLoginName  , cart ,setCart  }}>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Reg/>}/>
      <Route  path="/Login" element ={<Login/>}/>
      <Route path="/adminpage" element={<AdminDashboard/>}/>
      <Route path="/products" element={<UserProductpage/>}/>
      <Route path="/adminProductform" element={<AdminProduct_insert_Form/>}/>
      <Route path="/adminshowtabledata" element={<AdminProductsdetails/>}/>
  
      <Route path="/adminproductupdate/:id" element = {<Aupdateform/>}/>
     

      </Routes>
      </contextapi.Provider>
      </Router>

      

     
    
    
    </div>
  );
}

export default App;
