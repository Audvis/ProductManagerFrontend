import React from 'react';
import ProductList from '../../components/ProductList';
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
      {/* Botón "Add Product" solo aparece si no se está mostrando el formulario */}
      {!showForm && (
        <button
          className="btn btn-primary mb-3"
          onClick={toggleComponent}
        >
          Add Product
        </button>
      )}
      {showForm ? (
        <ProductForm
          addProduct={addProduct}
          editProduct={editProduct}
          editProductData={editProductData}
          clearEditProduct={clearEditProduct}
          toggleComponent={toggleComponent} // Para manejar la funcionalidad de "Cancelar"
          categories={categories}
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
