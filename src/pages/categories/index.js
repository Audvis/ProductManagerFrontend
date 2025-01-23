import React, { useState } from 'react';
import useCategories from '../../hooks/useCategories';
import CategoriesScreen from './CategoriesScreen';

const Categories = () => {
  const { categories, addCategory, editCategory, deleteCategory } = useCategories();
  const [showForm, setShowForm] = useState(false);
  const [editCategoryData, setEditCategoryData] = useState(null);

  const toggleComponent = () => {
    setShowForm((prevState) => !prevState);
    setEditCategoryData(null); // Limpia el estado de edición
  };

  const setEditCategory = (category) => {
    setEditCategoryData(category);
    setShowForm(true);
  };

  const clearEditCategory = () => {
    setEditCategoryData(null);
  };

  return (
    <CategoriesScreen
      showForm={showForm}
      toggleComponent={toggleComponent}
      categories={categories}
      addCategory={addCategory}
      editCategory={editCategory}
      deleteCategory={deleteCategory}
      editCategoryData={editCategoryData}
      setEditCategory={setEditCategory}
      clearEditCategory={clearEditCategory}
    />
  );
};

export default Categories;
