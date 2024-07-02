// create a prototype for a product object with properties like name, price and quantity. add a method to the product prototype to calculate the total value.

function Product (name,price,quantity) {
   this.name= name;
   this.price=price;
   this.quantity=quantity
}

Product.prototype.calculateTotalValue= function () {
 return this.price * this.quantity
}

const Product1 = new Product('widget',100,2)
const Product2 = new Product('gadget',50,2)

const totalValue = Product1.calculateTotalValue()
const totalValue2 = Product2.calculateTotalValue()

console.log(`Total value of ${Product1.name} is $${totalValue}`);
console.log(`Total value of ${Product2.name} is $${totalValue2}`);