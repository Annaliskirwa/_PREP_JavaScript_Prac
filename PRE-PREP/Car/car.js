"use strict";
exports.__esModule = true;
exports.Car = void 0;
var engine_1 = require("./engine");
var wheels_1 = require("./wheels");
var Car = /** @class */ (function () {
    function Car() {
        this.engine = new engine_1.Engine();
        this.wheels = new wheels_1.Wheels();
    }
    Car.prototype.Engine = function () {
        this.engine.start();
    };
    return Car;
}());
exports.Car = Car;
