import NavBar from "./nav-bar/NavBar";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Products from "./products/Products";
import Vision from "./vision/Vision";
import About from "./about/About";
import Product from "./product/Product";
import Cart from "./cart/Cart";
import CartProvider from "./common/providers/CartProvider";
import UserProvider from "./common/providers/UserProvider";
import Home from "./home/Home";

function App() {
  return (
    <Router>
      <UserProvider>
      <CartProvider>
        <header>
          <NavBar />
        </header>
        <main className="p-2" style={{height: 'calc(100vh - 44px)'}}>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path={["/", "/products"]} component={Products} />
            <Route exact path="/products/:productId" component={Product} />
            <Route exact path="/vision" component={Vision} />
            <Route exact path="/about" component={About} />
            <Route exact path="/cart" component={Cart} />
          </Switch>
        </main>
      </CartProvider>
      </UserProvider>

    </Router>
  )
}

export default App;
