import clsx from 'clsx'
import { useEffect, useRef } from 'react'


const initialClasses = "outline-none p-1 border border-solid border-pink-500 rounded"

function Input({shouldFocus=false, className, ...props}) {
    const ref = useRef(null);
    const mergedClasses = clsx(initialClasses, className)

    useEffect(() => {
        if(shouldFocus){
            ref.current.focus();
        }
    }, [ref])

    return (
        <input ref={ref} className={mergedClasses} {...props} />
    )
}

export default Input