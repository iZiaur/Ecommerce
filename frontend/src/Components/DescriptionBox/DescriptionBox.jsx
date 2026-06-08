import "./DescriptionBox.css";

function DescriptionBox() {
  return (
    <div className="description-box">
        <div className="description-box-navigator">
            
            <div className="decription-box-navbox">Description</div>
             <div className="decription-box-navbox-fade">Reviews(122)</div>

        </div>

        <div className="description-box-description">
            <p>This shirt is crafted from soft, breathable fabric that provides all-day comfort.
                Its modern fit creates a stylish and polished appearance for any occasion.
                The lightweight material allows easy movement while maintaining a neat look.
                Carefully stitched details enhance both durability and elegance.
                Perfect for work, casual outings, or special gatherings.</p>
            <p>The versatile design pairs effortlessly with jeans, trousers, or chinos.
                Its classic collar and refined finish add a touch of sophistication.
                The fabric resists wrinkles, helping you stay sharp throughout the day.
                Available in attractive colors, it complements a variety of personal styles.
                This shirt is an excellent choice for a comfortable and fashionable wardrobe.</p>
        </div>        
    </div>
  );
}

export default DescriptionBox;