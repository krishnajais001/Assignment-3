// Assignment 3
let cars = [];

cars.car1 = { Make: "Toyota", Model: "Camry", Year: 2018 };
cars.car2 = { Make: "Toyota", Model: "Camry", Year: 2018 };
cars.car3 = { Make: "Toyota", Model: "Camry", Year: 2018 };
delete cars.car1;
cars.newCar = { Make: "Honda", Model: "Civic", Year: 2020 };
cars.car2.Model = "Accord";
console.log(cars);
