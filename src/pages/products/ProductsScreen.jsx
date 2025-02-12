import React from 'react';
import ProductList from '../../components/ProductTable';
import ProductForm from '../../components/ProductForm';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  return (
    <div>
      <h1>Products</h1>

      {/* Botones alineados horizontalmente */}
      {!showForm && (
        <div className="d-flex justify-content-between mb-3">
          {/* Botón "Add Product" */}
          <button
            className="btn btn-primary"
            onClick={toggleComponent}
          >
            Add Product
          </button>

          {/* Botón "Go to Categories" (visible solo en mobile) */}
          <div className="d-block d-md-none">
            <button
              className="btn btn-secondary"
              onClick={() => navigate('/categories')}
            >
              Go to Categories
            </button>
          </div>
        </div>
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
