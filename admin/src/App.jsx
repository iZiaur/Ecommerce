import Admin from "./Pages/Admin/Admin.jsx"
import Navbar from "./Components/Navbar/Navbar"
import{Routes,Route} from "react-router-dom"

import ListProduct from "./Components/ListProduct/ListProduct.jsx"
import AddProduct from "./Components/AddProduct/AddProduct.jsx"
function App() {
  

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
