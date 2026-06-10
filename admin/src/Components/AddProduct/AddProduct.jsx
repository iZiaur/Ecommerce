
import "./AddProduct.css"
import upload_area from "../../assets/upload_area.svg"
import { useState } from "react";
function AddProduct(){
    const[image,setimage]=useState(false);
    const [productDetails,setproductDetails]=useState({
        name:"",
        image:"",
        category:"women",
        new_price:"",
        old_price:"",

    })
    function imageHandler(e){
            setimage(e.target.files[0]);
    }
    function changeHandler(e){
        setproductDetails({
            ...productDetails,[e.target.name]:e.target.value,

        })
    }

    async function addProduct(){
        console.log(productDetails);
        let responsedata;
        let product=productDetails;
        let formData=new FormData();
        formData.append('product',image);

        await fetch('http://localhost:4000/upload',{
            method:"POST",
            headers:{Accept:"application/json"},
            body:formData

            
        }).then((res)=>res.json()).then((data)=>responsedata=data);
        if(responsedata.success){
            console.log("Image Successfully saved");
            console.log(responsedata.image_url);
            product.image= responsedata.image_url;
            await fetch('http://localhost:4000/addproduct',{
                method:"POST",
                headers:{
                    Accept:"application/json",
                    "Content-Type":"application/json"},
                body:JSON.stringify(product),

            }).then((resp)=>resp.json()).then((data)=>{
                if(data.success){
                    alert("Product Added");
                }else{
                    alert("Failed");
                }
            })
        }
    }
    return(
        <div className="add-product">
            <div className="addproduct-itemfield">
                <p>Product Title</p>
                <input value={productDetails.name} onChange={changeHandler} type="text" name='name' placeholder="Type here"/>
            </div>
            <div className="addproduct-price">
                <div className="addproduct-itemfield">
                    <p>Price</p>
                    <input value={productDetails.old_price} onChange={changeHandler} type="text" name="old_price" placeholder="Type here"/>
                </div>
                <div className="addproduct-itemfield">
                    <p>Offer Price</p>
                    <input  value={productDetails.new_price} onChange={changeHandler} type="text" name="new_price" placeholder="Type here"/>
                </div>
            </div>
            <div className="addproduct-itemfield">
                <p>Product Category</p>
                <select value={productDetails.category} onChange={changeHandler}name="category" className="add-product-selector">
                    <option value="women">Women</option>
                    <option value="men">Men</option>
                    <option value="kid">Kid</option>
                </select>
            </div>
            <div className="addproduct-itemfield">
                <label htmlFor="file-input">
                    <img src={image?URL.createObjectURL(image):upload_area} alt=""  className="addproduct-thubnailimg"/>
                </label>
                <input onChange={imageHandler} type="file" name="image" id="file-input" hidden/>
            </div>
            <button onClick={addProduct} className="addproduct-btn">Add</button>
        </div>

    )
}

export default AddProduct;