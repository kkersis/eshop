import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {addToCart, getProduct} from '../api/requests'
import Card from '../common/components/Card';
import Counter from '../common/components/Counter'
import Spinner from '../common/components/Spinner';
import useApi from '../common/hooks/useApi';
import useCounter from '../common/hooks/useCounter';
import { notification } from '../common/components/Notification';
import AddToCartButton from './components/AddToCartButton';

function Product() {
    const {productId} = useParams();
    const {isLoading, data: product, call: getProductCall} = useApi();
    const {isLoading:isAddToCartLoading, call: addToCartCall} = useApi();
    const counterProps = useCounter();

    useEffect(() => {
        getProductCall(getProduct(productId));
        
    }, [productId]) //eslint-disable-line

    async function handleAddToCart(){
        await addToCartCall(addToCart(productId, counterProps.count));
        notification.success({text: "Product added to cart"});
    }

    if(isLoading || !product){
        return <Spinner text="Loading product"/>
    }


    return (
        
        <div className="flex m-auto" style={{maxWidth: 1000}}>
            <div className="flex-1 px-4">
                <Card>
                    <img src={product?.image} alt={product?.title}/>
                </Card>
            </div>

            <div className="flex-1 px-4">
                <h1 className="text-2xl font-semibold mb-4">{product?.title}</h1>

                <div className="text-2xl mb-4 font-bold">{product?.price}€</div>

                <p className="mb-4">{product?.description}</p>

                <div className="font-semibold mb-2">Quantity</div>
                <Counter className="mb-4" {...counterProps}/>
                <AddToCartButton isLoading={isAddToCartLoading} onClick={handleAddToCart}/>
            </div>
        </div>
    )
}

export default Product
