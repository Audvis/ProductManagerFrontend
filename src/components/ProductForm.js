import React, { useState, useEffect } from 'react';

const ProductForm = ({
  addProduct,
  editProduct,
  editProductData,
  clearEditProduct,
  toggleComponent,
  categories,
}) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [isEditing, setIsEditing] = useState(false);
console.log("ProductForm", editProductData);
  // Cargar datos en el formulario si se está editando
  useEffect(() => {
    if (editProductData) {
      setName(editProductData.name);
      setDescription(editProductData.description);
      setPrice(editProductData.price);
      setStock(editProductData.stock);
      setCategoryId(editProductData.category?.id);
      setIsEditing(true);
    } else {
      clearForm();
    }
  }, [editProductData]);

  // Manejo del envío del formulario
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
          toggleComponent(); // Volver al listado
        })
        .catch(() => alert('Failed to update product.'));
    } else {
      addProduct(product)
        .then(() => {
          clearForm();
          alert('Product added successfully!');
          toggleComponent(); // Volver al listado
        })
        .catch(() => alert('Failed to add product.'));
    }
  };

  // Limpiar formulario y estado
  const clearForm = () => {
    setName('');
    setDescription('');
    setPrice('');
    setStock('');
    setCategoryId('');
    setIsEditing(false);
    clearEditProduct();
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
          className="form-select w-100"
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
      <button
        type="button"
        className="btn btn-secondary ms-2"
        onClick={toggleComponent} // Regresa al listado al cancelar
      >
        Cancel
      </button>
    </form>
  );
};

export default ProductForm;
