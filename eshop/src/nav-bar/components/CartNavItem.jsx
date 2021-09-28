import NavItem from "./NavItem"
import {ReactComponent as CartIcon} from "../../common/assets/cart.svg"
import { useContext } from "react"
import { CartContext } from "../../common/providers/CartProvider"

function CartIconWithNo({productCount}){
    return <>
    <CartIcon className="w-7 h-7"/>
    {productCount && <span className="absolute text-yellow-400 font-semibold text-xs bottom-0">{productCount}</span>}
    </>
}

function CartNavItem() {
    const {cart} = useContext(CartContext);
    return (
        <NavItem content={<CartIconWithNo productCount={cart?.products?.length} />} route="/cart" className="ml-auto mr-2 relative" />
    )
}

export default CartNavItem
