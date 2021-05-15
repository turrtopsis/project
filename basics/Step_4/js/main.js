"use strict";


// // Объект
// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     // метод в объекте
//     makeTest: function() {
//         console.log("test");
//     }
// };

// // Запуск метода
// options.makeTest();

// // Получаем массив из объекта
// console.log(Object.keys(options));

// // Деструктуризация объекта - 
// const {border, bg} = options.colors;
// console.log(border);

// // Удаление ключа объекта
// delete options.name

// // Метод перебора, for in for of
// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for ( let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//     }
    
// }




// // массив
// const arr = [1, 2, 3, 6 , 8];

// // сортировка чисел в массиве
// arr.sort(compareNum);
// console.log(arr);
// function compareNum (a, b) {
//     return a - b;
// }

// // Гибкий перебор массива
// arr.forEach(function (item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// // // Удаляет последний эл. массива
// // arr.pop();
// // // Добавляет в конец эл. массива
// // arr.push(10);
// // // Перебор эл.массива
// // for (let i = 0; i < arr.length; i++) {
// //     console.log(arr[i]);
// // }

// for (let value of arr) {
//     console.log(value);
// }


// // split формирование массива из строк
// const str = prompt("", "");
// const products = str.split(", ");
// // сортировка по алфавиту
// products.sort();
// // формирование строки из массива
// console.log(products.join('; '));






// let a = 5,
//     b = a;

// b = b + 5;
// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };

// // const copy = obj; //Передает ссылку

// // copy.a = 10;

// // console.log(copy);
// // console.log(obj);

// function copy(mainObj) {
//     let objCopy = {};

//     let key;
//     for( key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }

//     return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;

// // console.log(newNumbers);
// // console.log(numbers);

// const add = {
//     d: 17,
//     e: 20
// };

// const clone = Object.assign({}, add);

// clone.d = 20;

// // console.log(add);
// // console.log(clone);

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();

// newArray[1] = 'asdsadasdasd';
// console.log(newArray);
// console.log(oldArray);

// // Оператор разворота
// const   video = ['youtube', 'vimeo', 'rutube'],
//         blogs = ['wordpress', 'livejournal', 'blogger '],
//         internet = [...video, ...blogs];

// console.log(internet);

// function log (a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const num = [2, 5, 7];
// // spread Оператор (...имя)

// log(...num);

// const array = ["a", "b"];
// const newAarray = [...array];

// const q = {
//     one: 1,
//     two: 2
// };
// const newObj = {...q};











// ООП

// let str = "some";
// let strObj = new String(str);

// // console.log(typeof(str));
// // console.log(typeof(strObj));

// console.dir([1, 2, 3]);

// const soldier = {
//     health: 400,
//     armor: 100,
//     sayHello: function () {
//         console.log('Hello');
//     }
// };

// const jonh = Object.create(soldier);

// // const jonh = {
// //     health: 100
// // };

// // Старый метод, лучше не использовать
// // jonh.__proto__ = soldier;
// // Новый метод
// Object.setPrototypeOf(jonh, soldier);

// console.log(jonh.armor);
// jonh.sayHello();