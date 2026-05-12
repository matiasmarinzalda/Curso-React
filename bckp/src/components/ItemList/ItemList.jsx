import { Item } from "../Item/Item";
import "./ItemList.css";

export const ItemList = ({ products }) => {
  if (!products.length) {
    return <p>No existen productos para mostrar</p>;
  }

  return (
    <div className="products-container">
      {products.map((product) => (
        <Item key={product.id} {...product} />
        //<Item key={product.id} name={product.name} description={product.description} price={product.price} image={product.image} />
      ))}
    </div>
  );
};
