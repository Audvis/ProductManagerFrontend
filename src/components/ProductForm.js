import React, { useState, useEffect } from 'react';

const ProductForm = ({
  addProduct,
  editProduct,
  editProductData,
  clearEditProduct,
  categories,
}) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [isEditing, setIsEditing] = useState(false);
console.log("rrrrrrr", categoryId);
  // Cargar los datos del producto en el formulario cuando se edita
  useEffect(() => {
    if (editProductData) {
        console.log(editProductData);
      setName(editProductData.name);
      setDescription(editProductData.description);
      setPrice(editProductData.price);
      setStock(editProductData.stock);
      setCategoryId(editProductData.category || ''); // Inicializar correctamente
      setIsEditing(true);
    } else {
      clearForm();
    }
  }, [editProductData]);

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    const product = {
      name,
      description,
      price: parseFloat(price),
      stock: parseInt(stock, 10),
      category_id: parseInt(categoryId, 10),
    };

    if (isEditing) {
      editProduct(editProductData.id, product)
        .then(() => {
          clearForm();
          alert('Product updated successfully!');
        })
        .catch(() => alert('Failed to update product.'));
    } else {
      addProduct(product)
        .then(() => {
          clearForm();
          alert('Product added successfully!');
        })
        .catch(() => alert('Failed to add product.'));
    }
  };

  // Limpiar el formulario
  const clearForm = () => {
    setName('');
    setDescription('');
    setPrice('');
    setStock('');
    setCategoryId('');
    setIsEditing(false);
    if (clearEditProduct) {
      clearEditProduct();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-3">
        <label htmlFor="productName" className="form-label">Product Name</label>
        <input
          type="text"
          className="form-control"
          id="productName"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="productDescription" className="form-label">Description</label>
        <textarea
          className="form-control"
          id="productDescription"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="productPrice" className="form-label">Price</label>
        <input
          type="number"
          step="0.01"
          className="form-control"
          id="productPrice"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="productStock" className="form-label">Stock</label>
        <input
          type="number"
          className="form-control"
          id="productStock"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="productCategory" className="form-label">Category</label>
        <select
          className="form-control"
          id="productCategory"
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
          required
        >
          <option value="">Select a category</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <button type="submit" className="btn btn-primary">
        {isEditing ? 'Update Product' : 'Add Product'}
      </button>
      {isEditing && (
        <button
          type="button"
          className="btn btn-secondary ms-2"
          onClick={clearForm}
        >
          Cancel
        </button>
      )}
    </form>
  );
};

export default ProductForm;
