function printLabel(labeledObj) {
    console.log("printLabel: " + labeledObj.label);
}
var myObj = { size: 10, label: 'Size 10 Object' };
printLabel(myObj);
function createSquare(config) {
    var newSquare = { color: 'white', area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    console.log("Square Config: " + config.color + ", " + config.width);
    return newSquare;
}
var mySquare = createSquare({ color: "black" });
var point = { x: 10, y: 20 };
var a = [1, 2, 3, 4, 5];
var ro = a;
a = ro;
var squar = createSquare({
    colour: 'red',
    width: 100
});
var sqaureOptions = { colour: 'red', width: 100 };
var newSquare = createSquare(sqaureOptions);
var mySearch;
mySearch = function (src, sub) {
    var result = src.search(sub);
    console.log('Function Type Interface: ', result);
    return result > -1;
};
console.log(mySearch('Hellow', 'll'));
var myArray = ['Bob', 'Fred'];
var myStr = myArray[0];
console.log(myStr);
var dict;
dict = {
    length: 1,
    name: 'hello',
    mode: 'light'
};
console.log(dict.mode);
var Clock = (function () {
    function Clock(h, m) {
        this.currentTime = new Date();
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return Clock;
}());
function createClock(ctor, hour, minute) {
    return new ctor(hour, minute);
}
var DigitalClock = (function () {
    function DigitalClock(h, m) {
    }
    DigitalClock.prototype.tick = function () {
        console.log('tick tok');
    };
    return DigitalClock;
}());
var AnalogClock = (function () {
    function AnalogClock(h, m) {
    }
    AnalogClock.prototype.tick = function () {
        console.log('tick tok');
    };
    return AnalogClock;
}());
var digital = createClock(DigitalClock, 12, 17);
var analog = createClock(AnalogClock, 7, 32);
//# sourceMappingURL=interfaces.js.map