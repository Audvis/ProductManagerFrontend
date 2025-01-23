import React, { useState } from 'react';
import axios from 'axios';

const CategoryForm = () => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://127.0.0.1:5001/categories/`, { name })
      .then(() => {
        setName('');
        alert('Category added successfully!');
      })
      .catch(error => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-3">
        <label htmlFor="categoryName" className="form-label">Category Name</label>
        <input
          type="text"
          className="form-control"
          id="categoryName"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">Add Category</button>
    </form>
  );
};

export default CategoryForm;
