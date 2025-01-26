import { useState } from 'react';
import useProducts from '../../hooks/useProducts';
import useCategories from '../../hooks/useCategories';

const Products = () => {
  const { products, addProduct, editProduct, deleteProduct } = useProducts();
  const { categories } = useCategories();
  const [showForm, setShowForm] = useState(false);
  const [editProductData, setEditProductData] = useState(null);

  const toggleComponent = () => {
    setShowForm((prevState) => !prevState);
    setEditProductData(null); // Limpia el producto en edición
  };

  const setEditProduct = (product) => {
    setEditProductData(product);
    setShowForm(true);
  };

  const clearEditProduct = () => {
    console.log("clearEditProduct");
    setEditProductData(null);
  };

  return (
   {
         showForm,
         toggleComponent,
         products,
         addProduct,
         editProduct,
         deleteProduct,
         editProductData,
         setEditProduct,
         clearEditProduct,
         categories,
   }
  );
};

export default Products;
