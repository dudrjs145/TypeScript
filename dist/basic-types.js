var isDone = false;
var decimal = 312;
var hex = 0x138;
var octal = 312;
var binary = 312;
var fullName = 'Kim Younggun';
var age = 28;
var sentence = "name: " + fullName + " age: " + age;
var list = [1, 2, 3];
var list2 = [4, 5, 6];
var x = ['hello', 10];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 3] = "Blue";
})(Color2 || (Color2 = {}));
var c2 = Color2.Green;
var notSure = 4;
notSure = "maybe a string instead";
notSure = false;
var unusable = undefined;
var u = undefined;
var n = null;
function error(message) {
    throw new Error(message);
}
function fail() {
    return error("Something failed");
}
create({ prop: 0 });
create(null);
var someValue = "this is a string";
var strLength = someValue.length;
var asSomeValue = "this is a string";
var asStrLength = asSomeValue.length;
//# sourceMappingURL=basic-types.js.map