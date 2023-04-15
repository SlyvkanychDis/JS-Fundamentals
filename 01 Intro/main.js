//2.Напишіть скріпт в зовнішньому файлі, який виводить в консоль ваше прізвище.
console.log("Slyvkanych");

//3.a) оголосіть дві змінні; b) запишіть у змінні будь-які значення;
let firstMeaning = 12;
let secondMeaning = 22;

//3.c) виведіть на екран значення змінних;
alert(firstMeaning);
alert(secondMeaning);

//3. d) скопіюйте значення однієї змінної в іншу;
firstMeaning = secondMeaning;

//3.e) виведіть на екран значення змінних.
alert(firstMeaning);
alert(secondMeaning);

/*4.Створіть об’єкт з 5-ма наступними властивостями: “String”, “Number”, “Boolean”, “Undefined”, “Null”. 
  Значення кожної властивості повинно відповідати відповідному примітивному типу даних.*/
let myObj = new Object();
myObj.productName = "Milk";
myObj.count = 42;
myObj.valid = true;
myObj.telNumber;
myObj.price = null;
console.log(myObj);

/*5.Використовуючи функцію confirm() задайте користувачу питання 
 про досягнення ним повнолітнього віку. Результат запишіть в змінну isAdult і виведіть в консоль.*/
let isAdult = confirm('Are you over 18 years old?');
console.log(isAdult);

/*6.В зовнішньому файлі напишіть скріпт, в якому оголосіть змінні, для збереження таких даних:
//7.ваше ім’я
//8.ваше прізвище
//9.навчальна група
10.ваш рік народження.*/
let name = prompt('Please fill in your name');
let secondName = prompt('Please fill in your surname');
let grup = prompt('Your grup?');
let age = prompt('Your age?');
alert(`Hello dear ${name} ${secondName}!! We glad to welcome you at ${grup} grup`);
console.log(`Name: ${name}, Surname: ${secondName}, Age: ${age}`);

/*11.Присвойте змінним відповідні значення. 
Створіть та проініціалізуйте логічну змінну для збереження вашого сімейного стану.
Визначте тип кожної змінної. 
Виведіть значення змінних в консоль, відповідно до їх типу, в такому порядку: Number, Boolean, String. 
Створіть 2 довільних змінних типу Null і Undefined відповідно. Виведіть їх тип в консоль.*/


/*12.За допомогою функції prompt() напишіть скріпт, який послідовно запитує в користувача логін, 
емейл та пароль, і виводить на екран повідомлення із введеними даними. Наприклад “Dear User, your 
email is usermale@gmail.com, your password is qwerty”.*/
let userLogin = prompt('Please fill in your Login');
let userEmail = prompt('Please fill in your Email');
let password = prompt('Please fill in your Password');
alert(`Dear ${userLogin}, your email is ${userEmail}, your passwor ${password}. Thanks!!! `)

/*Напишіть скріпт, який вираховує кількість секунд в годині, в добі, в місяці, 
записує результати в відповідні змінні, і виводить їх значення на екран.*/
let second = 60;
let hour = 60;
let day = 24;
let month = 30;
let secondsHours = second * hour;
alert(`In hour there are ${secondsHours} seconds`);
console.log(`In hour there are ${secondsHours} seconds`); 
let secondsDay = secondsHours * day;
alert(`In day there are ${secondsDay} seconds`);
console.log(`In day there are ${secondsDay} seconds`); 
let secondsMonth = secondsDay * month;
alert(`In month there are ${secondsMonth} seconds`);
console.log(`In month there are ${secondsMonth} seconds`); 