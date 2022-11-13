import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import List of All Pages
import HomePage from "./_pages/HomePage";
import Login from "./_pages/Login";
import Register from "./_pages/Register";
import Cart from "./_pages/Cart";
import Checkout from "./_pages/Checkout";
import ThanksOrder from "./_pages/ThanksOrder";
import Products from "./_pages/Products";
import ProductDetail from "./_pages/ProductDetail";
import NotFound from "./_pages/NotFound";
import About from "./_pages/About";

// Views Common
import Header from "./_views/Header";
import Footer from "./_views/Footer";


function App() {
  return (
      <Router>
            <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about-us" element={<About />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/products/:id" element={<ProductDetail />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/thanks-order/:id" element={<ThanksOrder />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            <Footer />
      </Router>
  );
}

export default App;
