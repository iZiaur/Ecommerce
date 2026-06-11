import Admin from "./Pages/Admin/Admin.jsx"
import Navbar from "./Components/Navbar/Navbar"
import Login from "./Components/Login/Login.jsx"
import{Routes,Route} from "react-router-dom"
import { useState, useEffect } from "react"

function App() {
  const [isAuth,setIsAuth]=useState(!!localStorage.getItem("auth-token"));

  useEffect(() => {
    const checkSession = () => {
      const token = localStorage.getItem('auth-token');
      const loginTime = localStorage.getItem('admin-login-time');
      if (token && loginTime) {
        const now = new Date().getTime();
        // 2 minutes = 120000 ms
        if (now - parseInt(loginTime) > 120000) {
          localStorage.removeItem('auth-token');
          localStorage.removeItem('admin-login-time');
          setIsAuth(false);
          alert('Admin session expired (2 minutes limit). Please log in again.');
        }
      } else if (token && !loginTime) {
        localStorage.setItem('admin-login-time', new Date().getTime().toString());
      }
    };
    checkSession();
    const interval = setInterval(checkSession, 5000); // Check every 5 seconds
    return () => clearInterval(interval);
  }, [isAuth]);

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
