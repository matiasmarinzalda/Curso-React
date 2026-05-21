import {createContext,useContext,useState} from 'react'
import { useNavigate } from 'react-router-dom'
/*
 * CREACION DE CONTEXTO PARA EL CARRITO DE COMPRAS  
 */

const CartContext = createContext();

/*
        CUSTOM HOOK PARA USAR EL CONTEXTO
*/
export const useCart = () => {
    const context = useContext(CartContext);
    if (!context){
        throw new Error('useCart debe ser usado dentro de un CartProvider');
    }
    return context; 
};  

/* 
        PROVEEDOR DE CONTEXTO 
*/
export const CartProvider = ({ children }) => {
    const navigate = useNavigate();
    const [cart, setCart] = useState([]);
    
    // Evalua la existencia del item en el carrito, devuelve un booleano
    const isInCart = (item) => {
        const inCart = cart.some(element => element.id === item.id);
        return inCart;
    }
    
    // Agrega un item al carrito, si el item ya existe, muestra una alerta y no lo agrega   
    const addItem = (item) => {
        if (isInCart(item)) {
            alert('El producto ya se encuentra en el carrito');
            return
        }
        setCart([...cart, item]);
        alert('Producto agregado al carrito 🛒🛒🛒');
    };
    // Elimina un item del carrito, recibe el id del item a eliminar, filtra el carrito y actualiza el estado del carrito con el nuevo array filtrado
    const removeItem = (id) => {
        const updatedCart = cart.filter(element => element.id !== id);
        setCart(updatedCart);
        alert('❌❌❌ Producto eliminado del carrito ❌❌❌');
    } 
    // Devuelve el total de items en el carrito, devuelve la longitud del array del carrito
    const getTotalItems = () => {
        return cart.length;
    }

    // vacia el carrito de compras  
    const clearCart = () => {
        setCart([]);
    }
    
    // Devuelve el total del precio de los items en el carrito, utiliza reduce para sumar el precio de cada item y devuelve el total
    const getCartTotal = () => {    
        return cart.reduce((acc, element) => acc + element.price, 0);
    }

    const checkout = () => {
        alert('💸💸💸 Gracias por su compra 💸💸💸');
        clearCart();
        navigate('/'); // Redirige a la página de inicio después de la compra
    }


          const values = {
            cart,
            addItem,
            removeItem,
            getTotalItems,
            getCartTotal,
            clearCart,
            checkout,
          };
    return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};