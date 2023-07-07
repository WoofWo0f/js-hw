const product = {
  id: 10,
  device: "Телевизор",
  brand: "Samsung",
  quantity: 7,
  price: 1700,
  totalPrice: undefined,
};

product.totalPrice = product.quantity * product.price;

for (let key in product) {
  console.log("Ключ: " + key + ", значение: " + product[key]);
}
