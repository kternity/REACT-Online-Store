import "./product.css";
import QuantityPicker from "./quantityPicker";

function Product(props) {
  return (
    <div className="product">
      <img src={"/images/"+props.data.image} alt=""></img>
      
      <h5>{props.data.title}</h5>
      <div className="prices">
        <label>total: ${props.data.Price.toFixed(2)}</label>
        <label>price: ${props.data.Price.toFixed(2)}</label>
      </div>

      <QuantityPicker />

      <button>Add</button>
    </div>
  );
}

export default Product;
