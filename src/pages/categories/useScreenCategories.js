import { useState } from 'react';
import useCategories from '../../hooks/useCategories';

const useScreenCategories = () => {
  const { categories, addCategory, editCategory, deleteCategory } = useCategories();
  const [showForm, setShowForm] = useState(false);
  const [editCategoryData, setEditCategoryData] = useState(null);

  const toggleComponent = () => {
    setShowForm((prevState) => !prevState);
    setEditCategoryData(null); // Limpia el estado de edición
  };

  const setEditCategory = (category) => {
    console.log("setEditCategory");
    setEditCategoryData(category);
    setShowForm(true);
  };

  const clearEditCategory = () => {
    setEditCategoryData(null);
  };

  return (
    {
        showForm,
        toggleComponent,
        categories,
        addCategory,
        editCategory,
        deleteCategory,
        editCategoryData,
        setEditCategory,
        clearEditCategory,
    }
  );
};

export default useScreenCategories;
