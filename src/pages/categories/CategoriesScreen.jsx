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

      {/* Botón para alternar */}
      <button
        className={`btn ${showForm ? 'btn-secondary' : 'btn-primary'} mb-3`}
        onClick={toggleComponent}
      >
        {showForm ? 'Back to Category List' : 'Add Category'}
      </button>

      {/* Renderizado condicional */}
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
