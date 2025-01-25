import React from 'react';
import CategoryList from '../../components/CategoryList';
import CategoryForm from '../../components/CategoryForm';

const CategoriesScreen = ({
  showForm,
  toggleComponent,
  categories,
  addCategory,
  editCategory,
  deleteCategory,
  editCategoryData,
  setEditCategory,
  clearEditCategory,
}) => {
  return (
    <div>
      <h1>Categories</h1>
      {/* Botón "Add Category" solo aparece cuando no estás en el formulario */}
      {!showForm && (
        <button
          className="btn btn-primary mb-3"
          onClick={toggleComponent}
        >
          Add Category
        </button>
      )}
      {showForm ? (
        <CategoryForm
          addCategory={addCategory}
          editCategory={editCategory}
          editCategoryData={editCategoryData}
          clearEditCategory={clearEditCategory}
          toggleComponent={toggleComponent}
        />
      ) : (
        <CategoryList
          categories={categories}
          deleteCategory={deleteCategory}
          setEditCategory={setEditCategory}
        />
      )}
    </div>
  );
};

export default CategoriesScreen;
