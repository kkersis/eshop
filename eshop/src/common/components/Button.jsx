import clsx from "clsx"
import { Link } from "react-router-dom"

const typeClassMap = {
    default: 'text-blue-900 hover:text-yellow-500',
    primary: 'bg-red-500 text-white hover:bg-red-700'
}
const disabledClasses = 'cursor-default bg-gray-500 text-black'
const initialClasses = 'p-1 focus:outline-none'

function Button({children, className, to, type = 'default', disabled, onClick}) {
    const mergedClasses = clsx(initialClasses, disabled ? disabledClasses : typeClassMap[type], className);

    if(to){
        return (
            <Link to={to} className={mergedClasses} disabled={disabled} onClick={onClick}>
                {children}
            </Link>
        );
    }

    return <button className={clsx(mergedClasses)} disabled={disabled} onClick={onClick}>{children}</button>
}

export default Button
