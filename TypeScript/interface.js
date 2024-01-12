"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _a = { name: "Kishan", id: 1, email: '' }, userName = _a.name, userLogin = _a.email;
var employee = { name: "Amit", id: 11, email: "", salary: 500000 };
// array destructuring
var _b = [
    { name: "Kishan", id: 1, email: '' },
    { name: "Ram", id: 2, email: '' },
    { name: "Guru", id: 3, email: '' },
    { name: "Rahul", id: 4, email: '' }
], user1 = _b[0], user2 = _b[1], ressUsers = _b.slice(2);
console.log(user1);
console.log(user2);
console.log(ressUsers);
var result = ressUsers.filter(function (user) { return user.id > 3; });
console.log(result);
