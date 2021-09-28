import Button from "../../common/components/Button";
import Card from "../../common/components/Card"

function ProductCard({productId, image, title, price}) {
    return (
        <li className="p-2">
            <Card to={`/products/${productId}`} className="w-64 h-80 hover:bg-gray-300 hover:text-red-500 hover:border-red-500" isRound>
                <div className=" h-5/6 p-4 flex">
                    <img className="max-h-full m-auto" src={image} alt={title} />
                </div>
                
                <div className="text-center font-bold truncate" title={title}>{title}</div>

                <div className="text-center">{price}€</div>

                {/*<div className="flex justify-center"> 
                    <Link to={`/products/${productId}`} className="text-center font-bold text-blue-700 hover:text-blue-500 p-1">
                        VIEW
                    </Link>
                    <Button to={`/products/${productId}`}>
                        VIEW
                    </Button>
                </div>
                */}
                
            </Card>
        </li>
    );
}

export default ProductCard
