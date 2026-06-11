import dropdown_icon from "../Components/Assets/dropdown_icon.png"
import "../Pages/css/ShopCategory.css"
import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import Item from "../Components/Item/Item.jsx"


import { toast } from 'react-toastify';

function ShopCategory(props){
    const{all_product}=useContext(ShopContext)
        return(
            <div className="shop-category">
                <img className="shopcategory-banner" src={props.banner} alt="" />
                <div className="shopcategory-indexSort">
                    <p>
                        <span>Showing 1-12</span> out of 36 products
                    </p>
                    <div className="shopcategory-sort">
                       Sort by  <img src={dropdown_icon} alt="" />

                    </div>
                </div>
                <div className="shopcategory-products">
                    {all_product.map((item,i)=>{
                        if(props.category===item.category){
                            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                        }else{
                            return null;
                        }
                    })}
                </div>
                <div className="shopcategory-loadmore" onClick={() => {
                    toast.info("You've seen all the products in this category!");
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }}>
                    Explore More
                </div>
            </div>
        )
}

export default ShopCategory;