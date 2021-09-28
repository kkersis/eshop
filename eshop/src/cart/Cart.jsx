import { useContext, useEffect } from "react"
import Input from "../common/components/Input"
import { CartContext } from "../common/providers/CartProvider"
import FormControl from "../common/components/FormControl"

function Cart() {


    return (
    <div className="m-auto" style={{maxWidth:500}}>
        <FormControl htmlFor="full-name" label="Full name">
            <Input shouldFocus id="full-name"/>
        </FormControl>
        <FormControl htmlFor="address" label="Address">
            <Input id="address"/>
        </FormControl>
    </div>
    )



    /*const {cart, refreshData} = useContext(CartContext);

    useEffect(() => {
        refreshData();
        
    }, [])

    return (
        <div>
            {JSON.stringify(cart)}
        </div>
    )*/
}

export default Cart
