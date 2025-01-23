import React, { useState } from 'react';
import CategoriesScreen from './CategoriesScreen';

const Categories = () => {
  // Estado para alternar entre CategoryList y CategoryForm
  const [showForm, setShowForm] = useState(false);

  // Función para alternar el estado
  const toggleComponent = () => {
    setShowForm((prevState) => !prevState);
  };

  return (
    <CategoriesScreen
      showForm={showForm}
      toggleComponent={toggleComponent}
    />
  );
};

export default Categories;

