console.log('I am a Typescript example');
var multiline = "THW \nWJW\nJSD\n euwen";
console.log(multiline);
var namee = "Jaack";
var introduction = "Hi he is called " + namee;
console.log(introduction);
function ping() {
    setTimeout(function () { return console.log("Till I come back home"); }, 1000);
}
ping(); //ping starts here
var person = { "first": "Jack",
    "last": "Obura" };
for (var attr in person) {
    console.log(attr);
}
var firstname = person.first, lastname = person.last;
console.log("Last name is " + lastname);
console.log("The first name is " + firstname);
var num = [1, 2];
var a = num[0], b = num[1];
console.log(a);
var numbers = [1, 2, 3];
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var num_1 = numbers_1[_i];
    console.log(num_1);
}
function asyncTask() {
    var promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            try {
                console.log("This is completed");
                resolve("Success");
            }
            catch (err) {
                reject(err);
            }
        }, 1000);
    });
    return promise;
}
asyncTask().then(function (val) { console.log(val); }, function (err) { console.log(err); });
