import "./ProductDisplay.css"
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png"


function ProductDisplay(props){
    const{product}=props
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
                Crafted from premium breathable fabric, this shirt offers all-day comfort with a modern tailored fit.
                Its versatile design pairs effortlessly with both casual and formal looks, making it perfect for any occasion.
                Finished with fine stitching and durable quality, it’s a wardrobe essential that combines style and confidence.

            </div>
            <div className="productdisplayrightsize">
                <h1>Select Size</h1>
                <div className="productdisplayrightsizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button >ADD TO CART</button>
            <p className="productsdisplayrightcategory"><span>Category :</span>Women,T-Shirt,Crop Top</p>
            <p className="productsdisplayrightcategory"><span>Tags :</span>Women,T-Shirt,Crop Top</p>

        </div>

    </div>
)
}

export default ProductDisplay;