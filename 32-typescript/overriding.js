class Car {
  constructor(year) {
    this.year = year;
  }
  getYear() {
    return this.year;
  }
}

class Truck extends Car {
  getYear() {
    return this.year + 5;
  }
}

const car = new Car(2020);
const truck = new Truck(2020);

console.log(car.getYear());
console.log(truck.getYear());
