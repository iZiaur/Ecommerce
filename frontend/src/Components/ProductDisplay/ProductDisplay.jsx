import "./ProductDisplay.css"
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png"
import { useContext, useState } from "react";
import { ShopContext } from "../../Context/ShopContext";


function ProductDisplay(props){
    const{product}=props
    const {addToCart}=useContext(ShopContext)
    const [size, setSize] = useState('M'); // default size M

return(
    <div className="productdisplay">
        <div className="productdisplayleft">
            <div className="productdisplayimglist">
                <img src={product.image} alt="" />
                 <img src={product.image} alt="" />
                  <img src={product.image} alt="" />
                   <img src={product.image} alt="" />
            </div>

            <div className="productdisplayimg">
                <img className="productdisplaymainimg"src={product.image} alt="" />
            </div>


        </div>
        <div className="productdisplayright">
            <h1>{product.name}</h1>
            <div className="productdisplayrightstar">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
            </div>
            <div className="productdisplayrightprices">
                <div className="productdisplayrightpricesold">
                    Rs.{product.old_price}
                </div>
                <div className="productdisplayrightpricesnew">
                    Rs.{product.new_price}
                </div>
            </div>

            <div className="displayrightdescription">
                {(() => {
                    const name = product.name ? product.name.toLowerCase() : '';
                    if (name.includes('jacket') || name.includes('coat') || name.includes('pullover')) {
                        return `Stay warm and stylish with the ${product.name}. Designed with premium materials and a sleek exterior, it provides ultimate comfort while keeping your fashion game on point. A must-have outerwear piece for cooler days.`;
                    }
                    if (name.includes('dress') || name.includes('gown')) {
                        return `Turn heads with the elegantly designed ${product.name}. Featuring a flattering silhouette and premium fabric, it offers a perfect blend of grace and comfort. Ideal for both daytime outings and special events.`;
                    }
                    if (name.includes('hoodie') || name.includes('sweatshirt')) {
                        return `Experience unmatched coziness with the ${product.name}. Crafted with a plush interior and a relaxed fit, it's perfect for chilly evenings or casual weekend wear. Complete with durable stitching for long-lasting comfort.`;
                    }
                    if (name.includes('t-shirt') || name.includes('shirt') || name.includes('top') || name.includes('blouse')) {
                        return `Upgrade your everyday look with the ${product.name}. Made with ultra-soft, breathable materials, it ensures maximum comfort whether you're lounging or heading out. The classic cut makes it a highly versatile addition to your closet.`;
                    }
                    if (name.includes('jeans') || name.includes('pants') || name.includes('trousers')) {
                        return `Step out in confidence with the ${product.name}. Tailored for a perfect fit, these offer both durability and flexibility for all-day wear. The timeless design makes them incredibly easy to pair with any top in your wardrobe.`;
                    }
                    
                    return `Discover the exceptional quality of the ${product.name}. Carefully crafted to meet modern fashion standards, it brings a fresh aesthetic to your collection. Designed for comfort, durability, and effortless style.`;
                })()}
            </div>
            <div className="productdisplayrightsize">
                <h1>Select Size</h1>
                <div className="productdisplayrightsizes">
                    <div className={size === 'S' ? 'active-size' : ''} onClick={() => setSize('S')}>S</div>
                    <div className={size === 'M' ? 'active-size' : ''} onClick={() => setSize('M')}>M</div>
                    <div className={size === 'L' ? 'active-size' : ''} onClick={() => setSize('L')}>L</div>
                    <div className={size === 'XL' ? 'active-size' : ''} onClick={() => setSize('XL')}>XL</div>
                    <div className={size === 'XXL' ? 'active-size' : ''} onClick={() => setSize('XXL')}>XXL</div>
                </div>
            </div>
            <button onClick={()=>addToCart(product.id, size)} >ADD TO CART</button>
            <p className="productsdisplayrightcategory"><span>Category :</span>Women,T-Shirt,Crop Top</p>
            <p className="productsdisplayrightcategory"><span>Tags :</span>Women,T-Shirt,Crop Top</p>

        </div>

    </div>
)
}

export default ProductDisplay;