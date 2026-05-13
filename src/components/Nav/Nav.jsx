import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./Nav.css";
// import styles from "./Nav.module.css";

export const Nav = () => {
  // Importamos el hook useCart para obtener el total de items en el carrito
  const { getTotalItems } = useCart();
  // Obtenemos el total de items en el carrito utilizando el hook useCart
  const totalItems = getTotalItems();

  return (
    <nav>
      {/* <ul className={styles["nav-list"]}> */}
      <ul className="nav-list">
        <li>
          <Link to={"/"}>Inicio</Link>
        </li>
        <li>
          <Link to={"/carrito"}>
            Carrito
            {totalItems > 0 && <span className="incart">{totalItems}</span>}
          </Link>

        </li>
      </ul>
    </nav>
  );
};
