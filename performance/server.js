module.exports = () => {
  const data = {
    products: [],
  }

  for(i = 0; i< 1000; i++) {
    data.products.push({
      id: i + 1,
      price: 80 + i,
      title: `Camiseta ${i + 1}`
    })
  }

  return data;
}