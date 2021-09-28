import Button from '../../common/components/Button'
import useLoadingDots from '../../common/hooks/useLoadingDots'

function Btn({onClick}) {
    return <Button type='primary' onClick={onClick}>ADD TO CART</Button>
}

function LoadingBtn(){
    const loadingDots = useLoadingDots();

    return(
    <Button type='primary' disabled className="flex">
        <span>ADDING TO CART</span>
        <span className="w-3 text-left">{loadingDots}</span>
    </Button>
    )
}

function AddToCartButton({isLoading, onClick}) {
    if(isLoading){
        return <LoadingBtn />
    }
    return <Btn onClick={onClick} />
}

export default AddToCartButton;