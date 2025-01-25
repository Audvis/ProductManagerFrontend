import React from 'react';
import CategoryCard from './CategoryCard';

const CategoryList = ({ categories, deleteCategory, setEditCategory }) => {
  if (categories.length === 0) {
    return <p className="text-center">No categories available</p>;
  }

  return (
    <div className="row">
      {categories.map((category) => (
        <div className="col-md-4" key={category.id}>
          <CategoryCard
            category={category}
            deleteCategory={deleteCategory}
            setEditCategory={setEditCategory}
          />
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
