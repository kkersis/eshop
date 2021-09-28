import NavItem from "./components/NavItem";
import CartNavItem from "./components/CartNavItem";

const navItems = [
    {content: 'HOME', route: '/home'},
    {content: 'PRODUCTS', route: '/'},
    {content: 'VISION', route: '/vision'},
    {content: 'ABOUT', route: '/about'}
]

function NavBar(){
    return(
        <nav className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
            <ul className="flex">
                {navItems.map((x) => (
                    //<NavItem content={x.content} route={x.route}/>
                    <NavItem key={x.route} {...x} />
                ))}
                <CartNavItem />
            </ul>
        </nav>
    )
}

export default NavBar;