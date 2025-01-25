import React from 'react';
import ProductList from '../../components/ProductTable';
import ProductForm from '../../components/ProductForm';

const ProductsScreen = ({
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
}) => {
  return (
    <div>
      <h1>Products</h1>

      {/* Botón para alternar */}
      <button
        className={`btn ${showForm ? 'btn-secondary' : 'btn-primary'} mb-3`}
        onClick={toggleComponent}
      >
        {showForm ? 'Back to Product List' : 'Add Product'}
      </button>

      {/* Renderizado condicional */}
      {showForm ? (
        <ProductForm
          addProduct={addProduct}
          editProduct={editProduct}
          editProductData={editProductData}
          clearEditProduct={clearEditProduct}
          categories={categories}
          toggleComponent={toggleComponent}
        />
      ) : (
        <ProductList
          products={products}
          deleteProduct={deleteProduct}
          setEditProduct={setEditProduct}
        />
      )}
    </div>
  );
};

export default ProductsScreen;
