import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
  const { id } = useParams();

  const [itemDetail, setItemDetail] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => {
        const item = data.find((element) => String(element.id) === id);
        if (item) {
          setItemDetail(item);
          return;
        }

        throw new Error("Elemento no encontrado");
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (!itemDetail) return <p>⛔🚫⛔Nah Nah Nah Lo que estas buscando por aqui no se encuentra... ⛔🚫⛔</p>;

  return (
    <section>
      <h1>Informacion detallada del producto</h1>
      <div className="products-container">
        <ItemDetail item={itemDetail} />
      </div>
    </section>
  );
};
