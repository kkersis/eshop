import { createContext, useEffect } from "react";
import { getCart } from "../../api/requests";
import useApi from "../hooks/useApi";

export const CartContext = createContext({});


function CartProvider({children}){
    const {data, call} = useApi();

    useEffect(() => {
        call(getCart);
    }, []) //eslint-disable-line

    return <CartContext.Provider value={{cart: data, refreshData: () => call(getCart)}}>{children}</CartContext.Provider>
}

export default CartProvider;