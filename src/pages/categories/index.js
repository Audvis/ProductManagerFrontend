import React, { useState } from 'react';
import useCategories from '../../hooks/useCategories';
import CategoriesScreen from './CategoriesScreen';
import useScreenCategories from './useScreenCategories';

const Categories = () => {
  const { categories, addCategory, editCategory, deleteCategory, showForm, toggleComponent, editCategoryData, setEditCategory, clearEditCategory } = useScreenCategories();

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
