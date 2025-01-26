import React from 'react';
import CategoryList from '../../components/CategoryList';
import CategoryForm from '../../components/CategoryForm';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  return (
    <div>
      <h1>Categories</h1>

      {/* Botones alineados horizontalmente */}
      {!showForm && (
        <div className="d-flex justify-content-between mb-3">
          {/* Botón "Add Category" */}
          <button
            className="btn btn-primary"
            onClick={toggleComponent}
          >
            Add Category
          </button>

          {/* Botón "Go to Products" (visible solo en mobile) */}
          <div className="d-block d-md-none">
            <button
              className="btn btn-secondary"
              onClick={() => navigate('/products')}
            >
              Go to Products
            </button>
          </div>
        </div>
      )}

      {showForm ? (
        <CategoryForm
          addCategory={addCategory}
          editCategory={editCategory}
          editCategoryData={editCategoryData}
          clearEditCategory={clearEditCategory}
          toggleComponent={toggleComponent} // Para manejar la funcionalidad de "Cancelar"
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
