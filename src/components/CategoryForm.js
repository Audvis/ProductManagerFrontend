import React, { useState, useEffect } from 'react';

const CategoryForm = ({ addCategory, editCategory, editCategoryData, clearEditCategory, toggleComponent }) => {
  const [name, setName] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  // Cargar los datos de la categoría en el formulario cuando se edita
  useEffect(() => {
    if (editCategoryData) {
      setName(editCategoryData.name);
      setIsEditing(true);
    } else {
      setName('');
      setIsEditing(false);
    }
  }, [editCategoryData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const category = { name };

    if (isEditing) {
      editCategory(editCategoryData.id, category)
        .then(() => {
            toggleComponent();
          alert('Category updated successfully!');
        })
        .catch(() => alert('Failed to update category.'));
    } else {
      addCategory(category)
        .then(() => {
            toggleComponent();
          alert('Category added successfully!');
        })
        .catch(() => alert('Failed to add category.'));
    }
  };

  const clearForm = () => {
    setName('');
    setIsEditing(false);
    clearEditCategory();
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-3">
        <label htmlFor="categoryName" className="form-label">Category Name</label>
        <input
          type="text"
          className="form-control"
          id="categoryName"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        {isEditing ? 'Update Category' : 'Add Category'}
      </button>
      {isEditing && (
        <button
          type="button"
          className="btn btn-secondary ms-2"
          onClick={toggleComponent}
        >
          Cancel
        </button>
      )}
    </form>
  );
};

export default CategoryForm;
