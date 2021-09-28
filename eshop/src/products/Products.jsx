import { useEffect } from "react";
import ProductCard from "./components/ProductCard";
import {getProducts } from '../api/requests'
import Spinner from "../common/components/Spinner";
import useApi from "../common/hooks/useApi";



//rfce parasius sugeneruoja snippeta default komponento
function Products() {
    const {isLoading, data: products, call} = useApi();

    useEffect(() => {
        call(getProducts);
    }, []); //eslint-disable-line


    if(isLoading || !products){
        return <Spinner text="Loading products"/>
    }

    return (
        <ul className="flex flex-wrap">
            {products.map((x) => (
                <ProductCard key={x.id} productId={x.id} image={x.image} title={x.title} price={x.price} />
            ))}
        </ul>
    )
}

export default Products

