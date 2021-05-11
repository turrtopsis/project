'use strict';

const   box = document.getElementById('box'),
        btns = document.getElementsByTagName('button'),
        circles = document.getElementsByClassName('circle'),
        wrapper = document.querySelector('.wrapper'),
        hearts = wrapper.querySelectorAll('.heart'),
        oneHeart = wrapper.querySelector('.heart');

box.style.backgroundColor = 'blue';
box.style.width = '500px';

box.style.cssText = 'background-color: blue; width: 500px;';

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// for (let i = 0; i <hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
   item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
// const text = document.createTextNode('Тут был я');
// Добавление html элемента в код html
div.classList.add('black');

wrapper.append(div);
// старая запись
// wrapper.appendChild(div);


// wrapper.prepend(div);
// //вставляем вперед
// hearts[0].before(div);
// // вставляем после
// hearts[0].after(div);
// старая запись
// wrapper.insertBefore(div, hearts[0]);


// // удаление элемента
// circles[0].remove();
// // старая запись
// wrapper.removeChild(hearts[1]);
// замена элемента
// hearts[0].replaceWith(circles[0]);
// // старая запись
// wrapper.replaceChild(circles[0], hearts[0]);

// div.innerHTML = "<h1>Hello World</h1>";

// // div.textContent = "Hello";

// div.insertAdjacentHTML("afterend", '<h2>Hello</h2>');
// beforebegin,afterbegin,beforeend,afterend