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
  products = products.filter( (item) => item.price >= minValue && item.price <= maxValue * (1 - discount / 100));
  
  return products;
};