import React from 'react';
import ProductsScreen from './ProductsScreen';
import useScreenProducts from './useScreenProducts';

const Products = () => {
  const { products, addProduct, editProduct, deleteProduct, showForm, toggleComponent, editProductData, setEditProduct, clearEditProduct, categories } = useScreenProducts();

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
