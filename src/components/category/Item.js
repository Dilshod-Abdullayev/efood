import img from "../../assets/img/item_01.png";
import "../../assets/css/main.css";
import { Button } from "../Navbar/Login";
import "../../assets/css/main.css";
export default function Item({ value }) {
  return (
    <div className="category__item-boxs">
      {value.map((item) => (
        <div key={item.id} className="category__item-box">
          <img src={img} />
          <p>{item.title} With Salad</p>
          <h1>${item.price}</h1>
          <Button>Add to Cart</Button>
        </div>
      ))}
    </div>
  );
}
