import "./Breadcrum.css"
import arrow_icon from "../Assets/arrow.png"



function Breadcrum(props){
    const {product}=props;
    return(
        <div className="breadcrum">
            HOME &gt; SHOP &gt; {product.category} &gt; {product.name}
            
        </div>
    )
}

export default Breadcrum;