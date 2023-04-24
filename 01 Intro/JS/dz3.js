/*1.Написати функцію createArray(start, end), яка приймає на вхід 2 параметри:
початкове значення
кінцеве значення
а на виході отримує масив із діапазоном цих значень (реалізувати достатньо лише із числовими значеннями)*/

/*function createArray(start, end) {
    const newArray = [];
    start = +prompt ('first');
    end = +prompt ('second');
    for (let i = start; i <= end; i++){
        newArray.push(i); 
    } 
    return newArray;  
}
alert(createArray());*/


/*2.Задані цілі числа a і b (a < b). Виведіть усі цілі числа
 від a до b включно, при цьому a виводится 1 раз, число а+1 - два рази і т.д.*/

 /*function sequenceNumbers(a,b) {
    const res = [];
    for (let n = a; n <= b; n++){
   res.push(...Array(n - a + 1).fill(n));
    }
    return res;
 }
console.log(sequenceNumbers(1,6));*/


/*3.Напишіть функцію randArray(k), яка заповнюватиме масив k випадковими 
цілими числами. Випадкові числа генеруються із діапазону 1-500.*/
function randArray() {
    const res2 = [];
    for (let n = 1; n <= 20; n++){
   res2.push(Math.floor(Math.random() * (500 - 1) + 1));
    }
    return res2;
 }
console.log(randArray());

/*8.
let firstArray = [1, 2, 3, 5, 3];
let secondArray = [1, 2, 3, 5];
 const isEqual = (firstArray, secondArray) => {
    if (firstArray.length !== secondArray.length) {
      return false;
    }
  
    const compared = firstArray.map((el, id) => secondArray[id] === el);
  
    return !compared.includes(false);
  };
  console.log(isEqual(firstArray, secondArray));*/
