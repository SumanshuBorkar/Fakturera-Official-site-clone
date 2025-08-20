const products = Array.from({ length: 200 }).map((_, i) => ({
    id: i + 1,
    articleNo: `ART${1000 + i}`,
    productService: `Test product ${i + 1} with fifty characters`,
    inPrice: 1000 + i * 13,
    price: 1500 + i * 8,
    unit: "kilometers/hour",
    inStock: 2000 + i * 5,
    description: `Description for product ${i + 1} with some text`
  }));
  
  export default products;
  