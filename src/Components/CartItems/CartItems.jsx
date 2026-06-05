import "./CartItems.css";
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";


function CartItems(){
    const {getTotalCartAmount,all_product,cartItems,addToCart,removeFromCart} = useContext(ShopContext);

    return(
        <div className="cart-items">
            <div className="cart-items-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr/>
            {all_product.map((e)=>{
                if(cartItems[e.id] > 0){
                    return <div>
                <div className="cart-items-format cart-items-format-main">
                    <img  src={e.image} alt=" " className="cart-items-product-icon"/>
                    <p>{e.name}</p>
                    <p>Rs.{e.new_price}</p>
                    
                    <button className="carditems-quantity">{cartItems[e.id]}</button>
                    <p>Rs.{e.new_price * cartItems[e.id]}</p>
                    <img src={remove_icon} className="cart-items-remove-icon" onClick={() => removeFromCart(e.id)}/>
                </div>
                <hr/>
            </div>
                }
                return null;
            })}
            < div className="cart-items-down">
                <div className="cart-items-total">
                    <h1>Cart Totals</h1>
                        <div>
                            <div className="class-item-total-item">
                                <p>Subtotal</p>
                                <p>Rs.{getTotalCartAmount()}</p>
                            </div>
                            <hr/>
                             <div className="class-item-total-item">
                                <p>Shipping Fee</p>
                                <p>Free</p>
                             </div>
                             <hr/>
                                <div className="class-item-total-item">
                                    <h3>Total</h3>
                                    <h3>Rs.{getTotalCartAmount()}</h3>
                                </div>

                        </div>
                        <button>PROCEED TO CHECKOUT</button>

                    </div>
                    <div className="cart-items-promocode">
                       <p>If you have a promo code enter it here</p> 
                          <div className="cart-items-promobox">
                            <input type="text" placeholder="promo code"/>
                            <button>Apply</button>
                          </div>
                    </div>
            </div>
        </div>
    )
}

export default CartItems;