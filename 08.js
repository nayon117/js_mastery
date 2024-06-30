// create an object representing a car with properties like make , model, and year . Add a method to the car object to start the engine.

let car = {
    make:"Toyota",
    model:"camry",
    year:2022
}
car.startEngine = function () {
    console.log("Engine Started");
}

car.startEngine()