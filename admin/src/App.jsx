import Admin from "./Pages/Admin/Admin.jsx"
import Navbar from "./Components/Navbar/Navbar"
import Login from "./Components/Login/Login.jsx"
import{Routes,Route} from "react-router-dom"
import { useState } from "react"

function App() {
  const [isAuth,setIsAuth]=useState(!!localStorage.getItem("auth-token"));

  if(!isAuth){
    return (
      <div>
        <Navbar/>
        <Login setIsAuth={setIsAuth}/>
      </div>
    )
  }

  return (
    <div>
      <Navbar/>
      
       <Routes>
            <Route path="/*" element={<Admin />} />
            
        </Routes>
      </div>
  )
}

export default App
