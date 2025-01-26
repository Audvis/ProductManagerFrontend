import React from 'react';

const CategoryCard = ({ category, deleteCategory,  setEditCategory}) => {
  return (
    <div className="card shadow-sm mb-3">
      <div className="card-body">
        {/* Muestra el ID de la categoría */}
        <h5 className="card-title">
          {category.name} <small className="text-muted">#{category.id}</small>
        </h5>
        <div className="d-flex justify-content-between">
          <button
            className="btn btn-sm btn-warning"
            onClick={() => console.log("dddddd", setEditCategory(category))}
          >
            Edit
          </button>
          <button
            className="btn btn-sm btn-danger"
            onClick={() => deleteCategory(category.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
