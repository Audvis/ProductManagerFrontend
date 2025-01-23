import { useState, useEffect } from 'react';
import axios from 'axios';

const useProducts = () => {
  const [products, setProducts] = useState([]);

  // Obtener todos los productos
  const fetchProducts = () => {
    axios
      .get(`http://127.0.0.1:5001/products/`)
      .then((response) => setProducts(response.data))
      .catch((error) => console.error('Error fetching products:', error));
  };

  // Agregar un producto
  const addProduct = (newProduct) => {
    return axios
      .post(`http://127.0.0.1:5001/products/`, newProduct)
      .then(() => fetchProducts())
      .catch((error) => {
        console.error('Error adding product:', error);
        throw error;
      });
  };

  // Editar un producto
  const editProduct = (id, updatedProduct) => {
    return axios
      .put(`http://127.0.0.1:5001/products/${id}`, updatedProduct)
      .then(() => fetchProducts())
      .catch((error) => {
        console.error('Error editing product:', error);
        throw error;
      });
  };

  // Eliminar un producto
  const deleteProduct = (id) => {
    return axios
      .delete(`http://127.0.0.1:5001/products/${id}`)
      .then(() => fetchProducts())
      .catch((error) => {
        console.error('Error deleting product:', error);
        throw error;
      });
  };

  // Obtener los productos al inicializar
  useEffect(() => {
    fetchProducts();
  }, []);

  return {
    products,
    fetchProducts,
    addProduct,
    editProduct,
    deleteProduct,
  };
};

export default useProducts;
