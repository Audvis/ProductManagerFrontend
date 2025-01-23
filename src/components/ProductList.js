import React, { useState } from 'react';

const ProductList = ({ products, deleteProduct, setEditProduct }) => {
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      deleteProduct(id)
        .then(() => alert('Product deleted successfully!'))
        .catch(() => alert('Failed to delete product.'));
    }
  };

  const handleEdit = (product) => {
    setEditProduct(product); // Pasa el producto al formulario para editarlo
  };

  return (
    <ul className="list-group">
      {products.map((product) => (
        <li key={product.id} className="list-group-item">
          <strong>{product.name}</strong> - ${product.price} <br />
          <small>{product.description}</small> <br />
          <span>Stock: {product.stock}</span>
          <br />
          <button
            className="btn btn-sm btn-warning mt-2 me-2"
            onClick={() => handleEdit(product)}
          >
            Edit
          </button>
          <button
            className="btn btn-sm btn-danger mt-2"
            onClick={() => handleDelete(product.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
