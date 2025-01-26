import React, { useState, useEffect } from 'react';
import { validateCategory } from '../utils/validations';

const CategoryForm = ({
  addCategory,
  editCategory,
  editCategoryData,
  clearEditCategory,
  toggleComponent,
}) => {
  const [category, setCategory] = useState({
    name: '',
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editCategoryData) {
      setCategory({
        name: editCategoryData.name,
      });
    } else {
      clearForm();
    }
  }, [editCategoryData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCategory((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateCategory(category);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    if (editCategoryData) {
      editCategory(editCategoryData.id, category).then(toggleComponent);
    } else {
      addCategory(category).then(toggleComponent);
    }
  };

  const clearForm = () => {
    setCategory({
      name: '',
    });
    setErrors({});
    clearEditCategory();
    toggleComponent();
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-3">
        <label htmlFor="categoryName" className="form-label">Category Name</label>
        <input
          type="text"
          className={`form-control ${errors.name ? 'is-invalid' : ''}`}
          id="categoryName"
          name="name"
          value={category.name}
          onChange={handleChange}
        
        />
        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
      </div>
      <button type="submit" className="btn btn-primary">
        {editCategoryData ? 'Update Category' : 'Add Category'}
      </button>
      <button
        type="button"
        className="btn btn-secondary ms-2"
        onClick={clearForm}
      >
        Cancel
      </button>
    </form>
  );
};

export default CategoryForm;
