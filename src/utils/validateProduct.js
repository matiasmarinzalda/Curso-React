export const validateProduct = (product) => {
  const errors = {};

  if (!product.name.trim()) {
    errors.name = "El nombre del producto es obligatorio ⚠⚠⚠";
  }

  if (!product.price || product.price <= 0) {
    errors.price = "El precio debe ser mayor que 0 para ser un precio valido ⚠⚠⚠";
  }

  if (!product.description.trim()) {
    errors.description = "La descripción del producto es obligatoria ⚠⚠⚠";
  }

  if (!product.category.trim()) {
    errors.category = "La categoria es obligatoria";
  }

  if (!product.file) {
    errors.file = "Debes seleccionar una imagen para el producto 🛑🛑🛑";
  }

  return errors;
};
