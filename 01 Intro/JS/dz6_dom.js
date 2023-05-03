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


/*4.
Задача описана в блоці JS
https://codepen.io/misha_klymenko/pen/Jjabvez
// реалізувати вивід даних із полів при кліку на кнопку "Надіслати" в поле outBlock
const button = document.querySelector('.btn');
const outBlock = document.querySelector('.out');
button.addEventListener('click', function(event) {
  event.preventDefault();
  const fields = document.querySelectorAll('.arr');
  let data = '';
  fields.forEach(function(field) {
    const fieldName = field.getAttribute('data-form');
    const fieldValue = field.value;
    data += `<p>${fieldName}: ${fieldValue}</p>`;
  });
   outBlock.innerHTML = data;
});*/


/*5.Задача описана в блоці JS
https://codepen.io/misha_klymenko/pen/abzLvqo
const circles = document.querySelectorAll('.circle');
circles.forEach(circle => {
  const anim = circle.dataset.anim;
  circle.classList.add(anim);
});
circles.forEach(circle => {
  circle.addEventListener('animationend', () => {
    console.log('Animation ended!');
  });
});*/

/*6.Задача описана в блоці JS
https://codepen.io/misha_klymenko/pen/dyjyeGO 

const colors = document.querySelectorAll('.color');
const outprice = document.getElementById('outprice');
colors.forEach(color => {
  color.addEventListener('click', () => {
    const price = color.getAttribute('data-price');
    outprice.textContent = price;
    colors.forEach(c => c.classList.remove('active'));
    color.classList.add('active');
  });
});
const shoes = document.querySelectorAll('.shoe');
const gradients = document.querySelectorAll('.gradient');
let prevColor = "blue";
function changeColor(){
    let primary = this.getAttribute('primary');
    let color = this.getAttribute('color');
    let shoe = document.querySelector(`.shoe[color="${color}"]`);
    let gradient = document.querySelector(`.gradient[color="${color}"]`);
    colors.forEach(c => c.classList.remove('active'));
    this.classList.add('active');
    shoes.forEach(s => s.classList.remove('show'));
    shoe.classList.add('show');
    gradients.forEach(g => g.classList.remove('first', 'second'));
    gradient.classList.add('first');
    prevGradient.classList.add('second');
    prevColor = color;
   // price.textContent = this.getAttribute('data-price');
}
colors.forEach(c => c.addEventListener('click', changeColor));
let prevGradient = document.querySelector(`.gradient[color="${prevColor}"]`);
gradients.forEach(g => {
    g.classList.remove('first', 'second');
    if (g.getAttribute('color') === prevColor) {
        g.classList.add('first');
        prevGradient = g;
    } else {
        g.classList.add('second');
    }
});*/