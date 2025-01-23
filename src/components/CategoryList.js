import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get(`http://127.0.0.1:5001/categories/`)
      .then(response => setCategories(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <ul className="list-group">
      {categories.map(category => (
        <li key={category.id} className="list-group-item">
          {category.name}
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;

