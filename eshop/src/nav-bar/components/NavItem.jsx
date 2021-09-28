import { Link } from "react-router-dom";
import clsx from 'clsx'

const initialClasses = "p-2 text-xl font-semibold hover:text-red-700";

function NavItem({content, route, className}) {
    return (
        <li className={clsx(initialClasses, className)}>
            <Link to={route}>{content}</Link>
        </li>            
    )
}

export default NavItem
