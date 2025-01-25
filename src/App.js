import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // Mantengo el nombre Navbar
import Home from './pages/Home';
import Categories from './pages/categories';
import Products from './pages/products';
import Footer from './components/Footer'; // Importo el nuevo Footer
import './styles.css'; // Mantengo tus estilos

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4" style={{ paddingBottom: '50px' }}> {/* Ajusto espacio para el footer */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
