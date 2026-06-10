
import { useState,useEffect } from "react";
import cross_icon from "../../assets/cross_icon.png" 
import "./ListProduct.css"
function ListProduct(){
    const [allproducts,setallproducts]=useState([])
    async function getdata(){
        await fetch("http://localhost:4000/allproducts")
        .then((res)=>res.json()).then((data)=>{
            setallproducts(data);
        })
    }

        useEffect(()=>{
            getdata()
        },[])

        async function removeproduct(id){
            await fetch('http://localhost:4000/removeproduct',{
                method:"POST",
                headers:{
                    Accept:"application/json",
                    'Content-Type':"application/json"
                },
                body:JSON.stringify({id:id})
            })

            await getdata();
        }
    return (
        <div className="list-product">
            <h1>All Products List</h1>
            <div className="list-product-formatmain">
                <p>Products</p>
                <p>Title</p>
                <p>Old Price</p>
                <p>New Price</p>
                <p>Category</p>
                <p>Remove</p>
            </div>

            <div className="list-product-allproducts">
                <hr/>
                {allproducts.map((product,index)=>{
                        return <><div className="list-product-formatmain listproduct-format">
                            <img src={product.image} alt="" className="listproduct-producticon" />
                            <p>
                                {product.name}
                            </p>
                            <p>Rs {product.old_price}</p>
                            <p>Rs {product.new_price}</p>
                            <p>{product.category}</p>
                            <img src={cross_icon} alt="" className="listproduct-removeicon"  onClick={()=>removeproduct(product.id)}/>
                            
                        </div>
                        <hr/></>
                })}
            </div>
        </div>
    )
}

export default ListProduct;