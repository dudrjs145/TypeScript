"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hello = 'hello';
let hello2 = 'hello2';
let timeoutPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        8;
        resolve('1 sec');
    }, 1000);
});
timeoutPromise.then(console.log);
const util_1 = require("./util");
const value = util_1.default(1, 2);
console.log(value);
