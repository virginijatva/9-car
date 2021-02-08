import { Car } from './components/Car.js'

const car = new Car(5, 2.5);

console.log(car);
car.turnOn();
car.drive(20);
console.log(car);
car.drive(20);
car.drive(20);
car.drive(20);
car.drive(200);
console.log(car);

car.turnOff();