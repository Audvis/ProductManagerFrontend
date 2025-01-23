import { useState, useEffect } from 'react';
import axios from 'axios';

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const url = process.env.REACT_APP_API_URL;

  // Obtener la lista de productos
  const fetchProducts = () => {
    axios
      .get(`http://127.0.0.1:5001/products/`)
      .then((response) => setProducts(response.data))
      .catch((error) => console.error('Error fetching products:', error));
  };

  // Agregar un nuevo producto
  const addProduct = (newProduct) => {
    return axios
      .post(`http://127.0.0.1:5001/products/`, newProduct)
      .then(() => fetchProducts())
      .catch((error) => {
        console.error('Error adding product:', error);
        throw error;
      });
  };

  // Editar un producto existente
  const editProduct = (id, updatedProduct) => {
    console.log("fffffff", id,  updatedProduct);
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
      .delete(`http://127.0.0.1:5001/products/${id}/`)
      .then(() => fetchProducts())
      .catch((error) => {
        console.error('Error deleting product:', error);
        throw error;
      });
  };

  // Cargar productos al inicializar
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
