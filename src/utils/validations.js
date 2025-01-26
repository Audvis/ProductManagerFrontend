export const validateProduct = (product, categories) => {
    const errors = {};
  
    if (!product.name.trim()) {
      errors.name = 'Name cannot be empty.';
    }
  
    if (!product.price || product.price <= 0) {
      errors.price = 'Price must be a positive number.';
    }
  
    if (
      product.stock === undefined ||
      product.stock === null ||
      product.stock < 0 ||
      !Number.isInteger(Number(product.stock))
    ) {
      errors.stock = 'Stock must be a non-negative integer.';
    }
  
    if (!product.category_id || !categories.some((cat) => cat.id === product.category_id)) {
      errors.category_id = 'You must select a valid category.';
    }
  
    return errors;
  };
  
  export const validateCategory = (category) => {
    const errors = {};
  
    if (!category.name.trim()) {
      errors.name = 'Name cannot be empty.';
    }
  
    return errors;
  };
  