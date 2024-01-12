var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// addition
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(12, 20));
// substraction
var sub = function (num1, num2) { return num1 - num2; };
console.log(sub(2, 3));
// multiplication
var mul = function (num1, num2) {
    return num1 * num2;
};
console.log(mul(12, 20));
// addition 3rd is optional parameter
function add1(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
console.log(add1(12, 20));
// Required parameter
var sub1 = function (num1, num2, num3) {
    if (num3 === void 0) { num3 = 10; }
    return num1 - num2 - num3;
};
console.log(sub1(2, 3));
console.log(sub1(2, 3, 6));
// Rest Parameter
function add2(num1, num2) {
    var num3 = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        num3[_i - 2] = arguments[_i];
    }
    return num1 + num2 + num3.reduce(function (a, b) { return a + b; }, 0);
}
// let numbers = [1,2,3,4,5];
// console.log(add2(2,3,...numbers));
console.log(add2.apply(void 0, __spreadArray([2, 3], [1, 2, 3, 4, 5], false))); //both are same
console.log(add2(2, 3, 1, 2, 3, 4, 5)); //both are same
// Generic function
function getItems(items) {
    return new Array().concat(items);
}
var concatResult = getItems([1, 2, 3, 4, 5]);
var concatString = getItems(["a", "b", "c", "d", "e"]);
console.log(concatResult);
console.log(concatString);
