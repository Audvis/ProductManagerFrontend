import React, { useState } from 'react';
import ConfirmModal from './ConfirmModal';

const ProductTable = ({ products = [], deleteProduct, setEditProduct }) => {
  const [showModal, setShowModal] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);

  const handleDeleteClick = (product) => {
    setProductToDelete(product);
    setShowModal(true); // Mostrar el modal
  };

  const confirmDelete = () => {
    if (productToDelete) {
      deleteProduct(productToDelete.id)
        .then(() => alert('Product deleted successfully!'))
        .catch(() => alert('Failed to delete product.'));
    }
    setShowModal(false);
    setProductToDelete(null);
  };

  const cancelDelete = () => {
    setShowModal(false);
    setProductToDelete(null);
  };

  return (
    <>
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 ? (
              products.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.description}</td>
                  <td>${product.price.toFixed(2)}</td>
                  <td>{product.stock}</td>
                  <td>{product.category ? product.category.name : 'Uncategorized'}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-warning me-2"
                      onClick={() => setEditProduct(product)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDeleteClick(product)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center">
                  No products available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal de confirmación */}
      <ConfirmModal
        show={showModal}
        title="Confirm Delete"
        message={`Are you sure you want to delete the product "${productToDelete?.name}"?`}
        onConfirm={confirmDelete}
        onCancel={cancelDelete}
      />
    </>
  );
};

export default ProductTable;
