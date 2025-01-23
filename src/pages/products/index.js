import React, { useState } from 'react';
import useProducts from '../../hooks/useProducts';
import useCategories from '../../hooks/useCategories';
import ProductsScreen from './ProductsScreen';

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
    setEditProductData(null);
  };

  return (
    <ProductsScreen
      showForm={showForm}
      toggleComponent={toggleComponent}
      products={products}
      addProduct={addProduct}
      editProduct={editProduct}
      deleteProduct={deleteProduct}
      editProductData={editProductData}
      setEditProduct={setEditProduct}
      clearEditProduct={clearEditProduct}
      categories={categories}
    />
  );
};

export default Products;
