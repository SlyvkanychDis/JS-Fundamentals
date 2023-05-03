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

/*2.
Для сторінки
<body>
  .....
</body>
Напишіть скріпт, який за допомогою засобів DOM простилізує сторінку так як показано на картинці.*/


/*3. 
Напишіть скріпт, який за допомогою засобів DOM створить для порожньої HTML-сторінки таку структуру з тегів і їх атрибутів.
<body>
  main class="mainClass check item">         
     <div id="myDiv">
         <p>First paragraph</p>           
     </div>
 </main> 
</body>*/
/*
const mainElement = document.createElement("main");
mainElement.setAttribute("class", "mainClass check item");
const divElement = document.createElement("div");
divElement.setAttribute("id", "myDiv");
const pElement = document.createElement("p");
const pText = document.createTextNode("First paragraph");
pElement.appendChild(pText);
divElement.appendChild(pElement);
mainElement.appendChild(divElement);
document.body.appendChild(mainElement);*/

