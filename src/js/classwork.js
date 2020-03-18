// "use strict";

// console.warn("CLASSWORK");
// console.warn("test task for job");
// В консоле написать скрипт, который убирает каждое 3-е письмо из входящих.
// Просьба прислать скрипт, который работает, а именно скрывает каждое 3-е письмо, то есть 3, 6, 9 и т.д.
// Проверок на длину не должно быть.
// Адаптивности, валидации и верификации не должно быть.

// let string = "Duis arcu tortor suscipit eget";

// const arr = string.slice(6);
// console.log("string:", string[string.length - 1]);

// const arr = string.split(" ");
// console.log(arr);

// const res = arr.join(" ");
// console.log(res);

// let camelCase = "";
// let element;

// const array = string.split(" ");
// console.log(array);

// for (let index = 0; index < array.length; index++) {
//   let res = [];
//   element = array[index][0].toUpperCase() + array[index].slice(1);
//   camelCase += element;
//   res.push(camelCase);
//   console.log(res);
// }

// let camelCase = "";
// let element;

// const array = string.split(" ");
// console.log(array);

// for (let index = 0; index < array.length; index++) {
//   element = array[index][0].toUpperCase() + array[index].slice(1) + " ";
//   camelCase += element;
// }
// camelCase = camelCase.slice(0, camelCase.length - 1);
// console.log(camelCase);

// let camelCase = "";
// let element;

// const array = string.split(" ");
// console.log(array);

// for (let index = 0; index < array.length; index++) {
//   element =
//     array[index][0].toUpperCase() +
//     array[index].slice(1) +
//     (index === array.length - 1 ? "" : " ");
//   camelCase += element;
// }

// console.log(camelCase);

//////////////////

// function sum(a, b) {
//   return console.log("result:", a + b);
// }
// function minus(a, b) {
//   return console.log("result:", a - b);
// }
// function getResult(a, b, callback) {
//   callback(a, b);
// }
// getResult(5, 4, minus);

// const calculator = {
//   result: 0,
//   sum(a, b) {
//     return console.log("result:", a + b);
//   },
//   minus(a, b) {
//     return console.log("result:", a - b);
//   },
//   getResult(a, b, callback) {
//     callback(a, b);
//   }
// };

// calculator.sum(2, 2);
// calculator.minus(2, 1);
// calculator.getResult(1, 1, minus);
// calculator.getResult(1, 1, sum);

/////////////////////////

// const user = {
//   userName: "default",
//   logInfo: function() {
//     console.log("userName: ", this.userName);
//     console.log("status: ", this.status);
//     console.log("course: ", this.course);
//   }
// };

// const vlad = {
//   userName: "Vlad",
//   status: "student",
//   course: "online"
// };

// const stas = {
//   userName: "Stas",
//   status: "owner",
//   course: "ofline"
// };

// console.log(user.logInfo());

// const getInfo = user.logInfo.bind(vlad);

// getInfo();
