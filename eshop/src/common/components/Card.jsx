import clsx from 'clsx'
import { Link } from 'react-router-dom'

const defaultClasses = "bg-gray-200 border shadow p-2"

function Card({className, isRound, children, to}) {
    
    if(to){
        return(
            <div className={clsx(defaultClasses, isRound && 'rounded', className)}>
                <Link to={to}>{children}</Link>
            </div>
        )
    }

    return (
        //{`bg-gray-200 rounded shadow p-2 ${isRound && 'rounded'} ${className}`}
        <div className={clsx(defaultClasses, isRound && 'rounded', className)}>
            {children}
        </div>
    )
}

export default Card
