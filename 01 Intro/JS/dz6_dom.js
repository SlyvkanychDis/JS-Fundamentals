/*1.На HTML-сторінці є ненумерований список з id="list", який складається із 5 елементів. У модальному вікні необхідно послідовно вивести вміст:
1) першого елемента списку
2) останнього елемента списку
3) другого елемента списку
4) четвертого елемента списку
5) третього елемента списку
Приклад:
•        1
•        2
•        3
•        4
•        5
Результат виводу: 1, 5, 2, 4, 3*/

/*const list = document.getElementById('list');
const elements = list.querySelectorAll('li');

const first = elements[0].textContent;
const last = elements[elements.length - 1].textContent;
const second = elements[1].textContent;
const fourth = elements[3].textContent;
const third = elements[2].textContent;

const result = `${first}, ${last}, ${second}, ${fourth}, ${third}`;

alert(result);*/