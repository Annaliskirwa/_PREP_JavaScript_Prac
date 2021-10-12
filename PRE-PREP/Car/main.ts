import { Car } from './car';
import { Engine } from './engine';
import { Wheels } from './wheels';

function main(){

  let engine = new Engine();
  let wheels = new Wheels()
  let car = new Car(engine,wheels);

  car.startEngine();
}

main();