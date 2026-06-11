
import "./Popular.css"

import Item from "../Item/Item"
import { useEffect, useState } from "react"

const API_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:4000';

function Popular(){
    let[data_product,setdata_product]=useState([]);

    useEffect(()=>{
        fetch(`${API_URL}/popularinwomen`).then((response)=>response.json()).then((data)=>setdata_product(data));
    },[])
return(
    <div className="popular">
        <h1>POPULAR IN WOMEN</h1>
        <hr/>
        <div className="popular-item">
            {data_product.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>

    </div>
)
}

export default Popular;