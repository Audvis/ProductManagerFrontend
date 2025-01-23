import { useState, useEffect } from 'react';
import axios from 'axios';

const useCategories = () => {
  const [categories, setCategories] = useState([]);

  // Obtener todas las categorías
  const fetchCategories = () => {
    axios
      .get(`http://127.0.0.1:5001/categories/`)
      .then((response) => setCategories(response.data))
      .catch((error) => console.error('Error fetching categories:', error));
  };

  // Agregar una nueva categoría
  const addCategory = (newCategory) => {
    return axios
      .post(`http://127.0.0.1:5001/categories/`, newCategory)
      .then(() => fetchCategories())
      .catch((error) => {
        console.error('Error adding category:', error);
        throw error;
      });
  };

  // Editar una categoría existente
  const editCategory = (id, updatedCategory) => {
    return axios
      .put(`http://127.0.0.1:5001/categories/${id}`, updatedCategory)
      .then(() => fetchCategories())
      .catch((error) => {
        console.error('Error editing category:', error);
        throw error;
      });
  };

  // Eliminar una categoría
  const deleteCategory = (id) => {
    return axios
      .delete(`http://127.0.0.1:5001/categories/${id}`)
      .then(() => fetchCategories())
      .catch((error) => {
        console.error('Error deleting category:', error);
        throw error;
      });
  };

  // Obtener las categorías al inicializar
  useEffect(() => {
    fetchCategories();
  }, []);

  return {
    categories,
    fetchCategories,
    addCategory,
    editCategory,
    deleteCategory,
  };
};

export default useCategories;
