import { useState } from "react";

function useCounter(){
    const [count, setCount] = useState(1);

    function onIncrement(){
        setCount((prevCount) => parseInt(prevCount + 1))
    }

    function onDecrement(){
        if(count === 0){
            setCount(0)
        }else{
            setCount((prevCount) => parseInt(prevCount - 1))
        }
    }

    function onInput(event){
        const val = event.target.valueAsNumber;
        if(isNaN(val)){
            setCount('');
        }else{
            setCount(val)
        }
    }

    return {
        count,
        onIncrement,
        onDecrement,
        onInput
    }
}

export default useCounter;