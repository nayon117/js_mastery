// implement a private variable using closure
function createCounter() {
    // private variable
  let count = 0;

  function increment() {
    count++;
    console.log("counter", count);
  }
  return {
    incrementCounter: function () {
      increment();
    },
    getCount: function () {
      return count; 
    },
  };
}
const counter = createCounter();
counter.incrementCounter()
counter.incrementCounter()
console.log(counter.getCount());
