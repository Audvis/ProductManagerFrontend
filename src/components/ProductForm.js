import React, { useState, useEffect } from 'react';
import { validateProduct } from '../utils/validations';

const ProductForm = ({
  addProduct,
  editProduct,
  editProductData,
  clearEditProduct,
  toggleComponent,
  categories,
}) => {
  const [formState, setFormState] = useState({
    name: '',
    description: '',
    price: '',
    stock: '',
    categoryId: '',
    isEditing: false,
  });

  const [errors, setErrors] = useState({}); // Estado para manejar los errores

  // Cargar datos en el formulario si se está editando
  useEffect(() => {
    if (editProductData) {
      setFormState({
        name: editProductData.name,
        description: editProductData.description,
        price: editProductData.price,
        stock: editProductData.stock,
        categoryId: editProductData.category?.id,
        isEditing: true,
      });
    } else {
      clearForm();
    }
  }, [editProductData]);

  // Manejo del cambio de los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Manejo del envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    const product = {
      name: formState.name,
      description: formState.description,
      price: parseFloat(formState.price),
      stock: parseInt(formState.stock, 10),
      category_id: parseInt(formState.categoryId, 10),
    };

    // Validar el producto
    const validationErrors = validateProduct(product, categories);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // Mostrar errores si hay alguno
      return;
    }

    if (formState.isEditing) {
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
    setFormState({
      name: '',
      description: '',
      price: '',
      stock: '',
      categoryId: '',
      isEditing: false,
    });
    setErrors({});
    clearEditProduct();
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-3">
        <label htmlFor="productName" className="form-label">Product Name</label>
        <input
          type="text"
          className={`form-control ${errors.name ? 'is-invalid' : ''}`}
          id="productName"
          name="name"
          value={formState.name}
          onChange={handleChange}
        />
        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
      </div>
      <div className="mb-3">
        <label htmlFor="productDescription" className="form-label">Description</label>
        <textarea
          className="form-control"
          id="productDescription"
          name="description"
          value={formState.description}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="productPrice" className="form-label">Price</label>
        <input
          type="number"
          step="0.01"
          className={`form-control ${errors.price ? 'is-invalid' : ''}`}
          id="productPrice"
          name="price"
          value={formState.price}
          onChange={handleChange}
        />
        {errors.price && <div className="invalid-feedback">{errors.price}</div>}
      </div>
      <div className="mb-3">
        <label htmlFor="productStock" className="form-label">Stock</label>
        <input
          type="number"
          className={`form-control ${errors.stock ? 'is-invalid' : ''}`}
          id="productStock"
          name="stock"
          value={formState.stock}
          onChange={handleChange}
        />
        {errors.stock && <div className="invalid-feedback">{errors.stock}</div>}
      </div>
      <div className="mb-3">
        <label htmlFor="productCategory" className="form-label">Category</label>
        <select
          className={`form-select ${errors.category_id ? 'is-invalid' : ''}`}
          id="productCategory"
          name="categoryId"
          value={formState.categoryId}
          onChange={handleChange}
        >
          <option value="">Select a category</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        {errors.category_id && (
          <div className="invalid-feedback">{errors.category_id}</div>
        )}
      </div>
      <button type="submit" className="btn btn-primary">
        {formState.isEditing ? 'Update Product' : 'Add Product'}
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
