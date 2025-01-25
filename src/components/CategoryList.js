import React, { useState } from 'react';
import ConfirmModal from './ConfirmModal';

const CategoryList = ({ categories, deleteCategory, setEditCategory }) => {
  const [showModal, setShowModal] = useState(false);
  const [categoryToDelete, setCategoryToDelete] = useState(null);

  const handleDeleteClick = (category) => {
    setCategoryToDelete(category);
    setShowModal(true); // Mostrar el modal
  };

  const confirmDelete = () => {
    if (categoryToDelete) {
      deleteCategory(categoryToDelete.id)
        .then(() => alert('Category deleted successfully!'))
        .catch(() => alert('Failed to delete category.'));
    }
    setShowModal(false);
    setCategoryToDelete(null);
  };

  const cancelDelete = () => {
    setShowModal(false);
    setCategoryToDelete(null);
  };

  return (
    <>
      <div className="row">
        {categories.map((category) => (
          <div className="col-md-4" key={category.id}>
            <div className="card shadow-sm mb-3">
              <div className="card-body">
                <h5 className="card-title">
                  {category.name} <small className="text-muted">#{category.id}</small>
                </h5>
                <div className="d-flex justify-content-between">
                  <button
                    className="btn btn-sm btn-warning"
                    onClick={() => setEditCategory(category)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDeleteClick(category)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal de confirmación */}
      <ConfirmModal
        show={showModal}
        title="Confirm Delete"
        message={`Are you sure you want to delete the category "${categoryToDelete?.name}"?`}
        onConfirm={confirmDelete}
        onCancel={cancelDelete}
      />
    </>
  );
};

export default CategoryList;
