import React from 'react';

const CategoryList = ({ categories, deleteCategory, setEditCategory }) => {
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this category?')) {
      deleteCategory(id)
        .then(() => alert('Category deleted successfully!'))
        .catch(() => alert('Failed to delete category.'));
    }
  };

  const handleEdit = (category) => {
    setEditCategory(category); // Pasa la categoría al formulario para editarla
  };

  return (
    <ul className="list-group">
      {categories.map((category) => (
        <li key={category.id} className="list-group-item">
          <strong>{category.name}</strong>
          <br />
          <button
            className="btn btn-sm btn-warning mt-2 me-2"
            onClick={() => handleEdit(category)}
          >
            Edit
          </button>
          <button
            className="btn btn-sm btn-danger mt-2"
            onClick={() => handleDelete(category.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;


