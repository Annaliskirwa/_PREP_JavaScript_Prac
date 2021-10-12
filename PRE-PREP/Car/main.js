"use strict";
exports.__esModule = true;
var car_1 = require("./car");
var engine_1 = require("./engine");
var wheels_1 = require("./wheels");
function main() {
    var engine = new engine_1.Engine();
    var wheels = new wheels_1.Wheels();
    var car = new car_1.Car(engine, wheels);
    car.startEngine();
}
main();
