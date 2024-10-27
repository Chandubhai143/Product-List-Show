import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import Products from './Products';
import ProductDetail from './ProductDetail';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <div>
        <nav className="bg-success-subtle text-center p-3">
          <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;
          <Link to="/products">Products</Link>&nbsp;&nbsp;&nbsp;
          
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



App.js
