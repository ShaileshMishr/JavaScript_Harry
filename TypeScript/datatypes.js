// string
var Lname;
Lname = "Shailesh";
var newname = Lname.toUpperCase();
console.log(newname);
// number
var age;
age = 24;
var dob = "25";
var result = parseInt(dob);
console.log(age);
console.log(result);
// boolean
var isValid = false;
console.log(isValid);
// array
var empList;
empList = ["Santosh", "kishan", "Ram"];
var numList;
numList = [1, 2, 3, 4, 5];
// swapping
// let newNum = numList[0];
// console.log(newNum);
// filter
var results = numList.filter(function (num) { return num > 2; });
// find
var num = numList.find(function (num) { return num === 2; });
var emp = empList.find(function (emp) { return emp === "Ram"; });
// reduce
var sum = numList.reduce(function (acc, num) { return acc + num; });
console.log(results);
console.log(num);
console.log(emp);
console.log(sum);
var c = 2 /* Color.Blue */;
// tuples
var swapNumbs;
function swapNumbers(num1, num2) {
    return [num2, num1];
}
swapNumbs = swapNumbers(10, 20);
swapNumbs[0];
swapNumbs[1];
// any 
var department;
department = "IT";
department: 10;
