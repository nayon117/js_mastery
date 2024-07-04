// create a function that takes a array of objects  which calculates the total price and returns it as a number.

function getTotalPrice(groceries) {
  let total = 0;
  for (const item of groceries) {
    const itemPrice = item.quantity * item.price;
    total += itemPrice;
  }
  return total;
}

console.log(
  getTotalPrice([
    {
      product: "milk",
      quantity: 2,
      price: 12,
    },
    {
      product: "egg",
      quantity: 1,
      price: 16,
    },
  ])
);
