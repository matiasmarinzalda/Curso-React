import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { getProductById } from "../../services/productsService";

export const ItemDetailContainer = () => {
  const { id } = useParams();

  const [itemDetail, setItemDetail] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductById(id)
      .then((data) => setItemDetail(data))
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
