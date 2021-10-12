"use strict";
exports.__esModule = true;
exports.Car = void 0;
var Car = /** @class */ (function () {
    function Car(engine, wheels) {
        this.engine = engine;
        this.wheels = wheels;
    }
    Car.prototype.startEngine = function () {
        this.engine.start();
    };
    return Car;
}());
exports.Car = Car;
