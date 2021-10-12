import { Engine } from './engine';
import { Wheels } from './wheels';

export class Car{
    engine: Engine;
    wheels: Wheels;

    constructor(){
        this.engine = new Engine();
        this.wheels = new Wheels();
    }

    start Engine(){
        this.engine.start()
    }
}