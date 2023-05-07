/*1.За допомогою методів об’єкта window створити:
1) нове вікно розміром 300х300 пікселів.
2) із затримкою 2 сек змініть розміри вікна на 500х500 пікселів
3) із затримкою 2 сек перемістіть вікно в точку з координатами (200, 200)
4) із затримкою 2 сек закрийте вікно.*/

/*let myWindow = window.open("", "", "width=300,height=300");
setTimeout(() => {
  myWindow.resizeTo(500, 500);
}, 2000);
setTimeout(() => {
  myWindow.moveTo(200, 200);
}, 4000);
setTimeout(() => {
  myWindow.close();
}, 6000);*/

/*2.Для заданої HTML-сторінки:
<p id ='text'>I learning JavaScript events!</p> 
<div>
        <button . . . . . >Change style!</button>
</div>
напишіть функцію changeCSS(), яка спрацьовуватиме по кліку на кнопку і змінюватиме 
стиль вмісту тега <p>: колір шрифту – оранжевий, розмір шрифту 20px, шрифт сімейства "Comic Sans MS".*/

function changeCSS() {
    let text = document.getElementById('text');
    text.style.color = 'orange';
    text.style.fontSize = '20px';
    text.style.fontFamily = 'Comic Sans MS';
  }
  let button = document.querySelector('button');
  button.onclick = changeCSS;

  /*3.Задано сторінку з 3 кнопками і 1 лінкою. Напишіть Javascript код і реалізуйте HTML-сторінку з відповідними подіями на кожному елементові:
  1) 1-ша кнопка – при кліку на неї колір фону сторінки міняється на синій
  2) 2-га кнопка – при подвійному кліку на неї колір фону сторінки міняється на рожевий
  3) 3-я кнопка – при натисненні і утримуванні кнопки колір фону сторінки стає коричневий. При відпусканні – білий.
  4) При наведенні на лінку – колір фону стає жовтим, при відведенні – білим.
  Приклад – курсор наведений на лінку.*/

let button1 = document.getElementById('button1');
let button2 = document.getElementById('button2');
let button3 = document.getElementById('button3');
let link = document.getElementById('link');
button1.addEventListener('click', function() {
  document.body.style.backgroundColor = 'blue';
});
button2.addEventListener('dblclick', function() {
  document.body.style.backgroundColor = 'pink';
});
button3.addEventListener('mousedown', function() {
  document.body.style.backgroundColor = 'brown';
});
button3.addEventListener('mouseup', function() {
  document.body.style.backgroundColor = 'white';
});
link.addEventListener('mouseover', function() {
  document.body.style.backgroundColor = 'yellow';
});
link.addEventListener('mouseout', function() {
  document.body.style.backgroundColor = 'white';
});

/*4.Реалізуйте програму, яка по натисканню на кнопку видалятиме обраний елемент випадаючого 
списку. Можуть видалятися всі елементи в будь-якому порядку.*/

const deleteBtn = document.getElementById("deleteBtn");
const select = document.getElementById("mySelect");
deleteBtn.addEventListener("click", function() {
  const selectedOptions = Array.from(select.selectedOptions);
  selectedOptions.forEach(option => option.remove());
});

/*5.Реалізуйте програму, яка по натисканню на кнопку виводитиме повідомлення 
"I was pressed!", при наведенні на кнопку виводитиме повідомлення "Mouse on me!", 
а при відведенні курсора миші виводитиме повідомлення "Mouse is not on me!".*/

const myButton = document.getElementById('myButton');
const message = document.getElementById('message');
myButton.addEventListener('click', function() {
  message.textContent += 'I was pressed!';
});
myButton.addEventListener('mouseover', function() {
  message.textContent += 'Mouse on me!';
});
myButton.addEventListener('mouseout', function() {
  message.textContent += 'Mouse is not on me!';
});