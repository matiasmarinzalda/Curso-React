import "./Nav.css";
// import styles from "./Nav.module.css";

export const Nav = () => {
  return (
    <nav>
      {/* <ul className={styles["nav-list"]}> */}
      <ul className="nav-list">
        <li>🏚  Inicio</li>
        <li>🛒 Carrito</li>
      </ul>
    </nav>
  );
};
