import React, { useState, useEffect } from 'react';

const CategoryForm = ({
  addCategory,
  editCategory,
  editCategoryData,
  clearEditCategory,
  toggleComponent,
}) => {
  const [name, setName] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  // Cargar datos en el formulario cuando se edita
  useEffect(() => {
    if (editCategoryData) {
      setName(editCategoryData.name); // Cargar el nombre de la categoría
      setIsEditing(true);
    } else {
      clearForm();
    }
  }, [editCategoryData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const category = { name };

    if (isEditing) {
      editCategory(editCategoryData.id, category)
        .then(() => {
          clearForm();
          alert('Category updated successfully!');
          toggleComponent(); // Cambiar al listado después de editar
        })
        .catch(() => alert('Failed to update category.'));
    } else {
      addCategory(category)
        .then(() => {
          clearForm();
          alert('Category added successfully!');
          toggleComponent(); // Cambiar al listado después de agregar
        })
        .catch(() => alert('Failed to add category.'));
    }
  };

  // Limpiar formulario y estado
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
      <button
        type="button"
        className="btn btn-secondary ms-2"
        onClick={toggleComponent} // Regresa al listado al cancelar
      >
        Cancel
      </button>
    </form>
  );
};

export default CategoryForm;
