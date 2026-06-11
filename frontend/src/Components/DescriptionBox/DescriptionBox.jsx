import "./DescriptionBox.css";

function DescriptionBox({ product }) {
  const name = product ? product.name : "this item";
  const category = product ? product.category : "clothing";

  return (
    <div className="description-box">
        <div className="description-box-navigator">
            
            <div className="decription-box-navbox">Description</div>
             <div className="decription-box-navbox-fade">Reviews(122)</div>

        </div>

        <div className="description-box-description">
            <p><strong>Product Overview:</strong> Elevate your wardrobe with {name}, exclusively available at Threadly. Crafted from premium, breathable materials, this piece is designed to offer maximum all-day comfort without compromising on style. Its modern fit creates a polished appearance for any occasion, from casual outings to special gatherings.</p>
            
            <p><strong>Specifications & Details:</strong></p>
            <ul>
                <li><strong>Manufactured by:</strong> Threadly Originals</li>
                <li><strong>Category:</strong> {category.charAt(0).toUpperCase() + category.slice(1)}'s Fashion</li>
                <li><strong>Cloth Length / Fit:</strong> Regular tailored fit</li>
                <li><strong>Material Care:</strong> Machine washable, cold water recommended</li>
                <li><strong>Durability:</strong> Features reinforced, careful stitching to resist daily wear and tear</li>
            </ul>
            
            <p>The versatile design pairs effortlessly with your favorite jeans, trousers, or chinos. The high-quality fabric is wrinkle-resistant, helping you stay sharp throughout the day. {name} is an excellent choice for anyone looking to build a comfortable and fashionable wardrobe.</p>
        </div>        
    </div>
  );
}

export default DescriptionBox;