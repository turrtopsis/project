// const   btns = document.querySelectorAll('button'),
//         overlay = document.querySelector('.overlay');

// // btn.onclick = function () {
// //     alert('Click');
// // };

// // Отслеживание клика
// // btn.addEventListener('click', () => {
// //     alert('Click');
// // });

// // // Наведение мышки
// // btn.addEventListener('mouseenter', () => {
// //     console.log('hover');
// // });

// let i = 0;
// const deleteElement = (e) => {
//     console.log(e.currentTarget);
//     console.log(e.type);
//     // i++;
//     // if (i == 1) {
//     //     btn.removeEventListener('click', deleteElement);
//     // }
// };

// // btn.addEventListener('click', deleteElement);
// // overlay.addEventListener('click', deleteElement);

// btns.forEach(btn => {
//     btn.addEventListener('click', deleteElement);
// });

// const link = document.querySelector('a');

// link.addEventListener('click', (event) => {
//     event.preventDefault();

//     console.log(event.target);
// }); 

// DOM
// // Получение эл. со страницы
// console.log(document.head);
// console.log(document.documentElement);
// console.log(document.body.childNodes);
// console.log(document.body.firstChild);
// console.log(document.body.firstElementChild);
// console.log(document.body.lastChild);
// console.log(document.querySelector('#current').parentNode.parentNode);
// console.log(document.querySelector('#current').parentElement);
// // Следующий элемент
// console.log(document.querySelector('[data-current="3"]').nextElementSibling);
// // Предыдущий элемент
// console.log(document.querySelector('[data-current="3"]').previousElementSibling);

// ChildNodes

// for (let node of document.body.childNodes) {
//     if(node.nodeName == "#text") {
//         continue;
//     }
    
//     console.log(node);
// }