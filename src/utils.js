export const getCategories = (products) => {
  let categories = [];
  
    products.forEach(product => {
      if (!categories.find(category => category === product.category)) {
        categories.push(product.category);
      }
    });
  
    return categories;
}

export const getFiltredProducts = (minValue, maxValue, discount, category, data) => {
  let products = data;
  if(category) {
    products = data.filter( (item) => item.category === category);
  }
  products = products.filter( (item) => item.discount >= discount );
  products = products.filter( (item) => item.price >= minValue && item.price <= maxValue );
  
  return products;
};

export const getTotalProductsPrice = (products) => {
  return products.reduce((current, item) => item.price + current, 0);
}