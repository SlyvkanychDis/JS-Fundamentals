/*1.Дано три цілих числа: a, b, c. Перевірте істинність висловлювання:
 a < b < c */
let a = 2;
let b = 5;
let c = 10;
console.log(`2< 5< 10 : ${a < b && b< c}`);
console.log(`2> 5> 10 : ${a > b && b> c}`);//test

//2.
let x = 1;
let y = 2;
let res1 = String(4 * (x+y)); // Допишіть код, необхідно використовувати змінні x і y
console.log(res1); // ""12""
console.log(typeof res1); // ""string""

let res2 = String (x !== y); // Допишіть код, необхідно використовувати змінні x і y
console.log(res2); // ""true2""
console.log(typeof res2); // ""string""

let res3 = Boolean(x !== y); // Допишіть код, необхідно використовувати змінні x і y
console.log(res3); // true
console.log(typeof res3); // ""boolean""

let res4 = Math.sqrt(x-y);// Допишіть код, необхідно використовувати змінні x і y
console.log(res4); // NaN
console.log(typeof res4); // ""number""


/*3.Використовуючи функцію prompt() задайте користувачу питання про досягнення ним повнолітнього віку.
Результат запишіть в змінну isAdult. В залежності від отриманого значення виведіть відповідне повідомлення 
про статус особи. Наприклад: при виконанні умови 
вік більше 18 вивести “Ви досягли повнолітнього віку”. Якщо вік менше 18 років вивести “Ви ще надто молоді”,*/
let isAdult = +prompt("Enter your age:");

if (isAdult >= 18) {
    alert("Ви досягли повнолітнього віку");
}
else {
    alert("Ви ще надто молоді");
};

/*4.
Задано масив чисел, знайти число яке найбільш часто входить в масив, занести це число в новий 
масив і видалити всі входження цього числа із поточного масиву.*/
let arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5]
let data = arr.sort().toSpliced(5,4); // 5

console.log(data)
console.log(arr) // [4, 2, 1, 6, 3, 2]


/*5.Користувач вводить три довжини сторін трикутника (використовуйте prompt () три рази для введення кожної сторони).
Необхідно 
    a) визначити і вивести в консоль площу трикутника 
    b) перевірити чи цей трикутник є прямокутним і вивести в консоль результат перевірки.
Здійснювати перевірку чи введені користувачем значення коректні, в іншому випадку вивести 'Incorrect data‘. Результат 
обчислення площі трикутника виводити в консоль з точністю 3 знаки після коми (наприклад:  8.42355465 =>  8.424).*/
let firstSide = +prompt('Please fill in first number');
let secondSide = +prompt('Please fill in second number');
let thirdSide = +prompt('Please fill in third number');
let pTriangle = (firstSide+secondSide+thirdSide) / 2;
let areaTriangle = Math.sqrt( pTriangle * (pTriangle - firstSide) * (pTriangle - secondSide) * (pTriangle - thirdSide) );
console.log((areaTriangle.toFixed (3)));
if (
    /*firstSide ** 2 === secondSide ** 2 + thirdSide ** 2 ||
    secondSide ** 2 === firstSide ** 2 + thirdSide ** 2 ||
    thirdSide **2 === firstSide ** 2 + secondSide ** 2*/
    Math.pow(firstSide, 2) ===  Math.pow(secondSide, 2) + Math.pow(thirdSide, 2) ||
    Math.pow(secondSide, 2) ===  Math.pow(firstSide, 2) + Math.pow(thirdSide, 2) ||
    Math.pow(thirdSide, 2) ===  Math.pow(firstSide, 2) + Math.pow(secondSide, 2) 
  ) 
  {
    console.log("This is right triangle");
  } else {
    console.log("This is not right triangle");
  }
 //6.

 let currDate = new Date();
 let hours= currDate.getHours();
if (hours >= 23 && hours < 5 ) {
  console.log("доброї ночі");
}else if (hours >= 5 && hours <= 11){
  console.log("доброго ранку");
}else if (hours > 11 && hours <= 17){
  console.log("доброго дня");
}else if (hours > 17 && hours <= 23){
  console.log("доброго вечора");
}else {
  console.log("виникла помилка");
}



