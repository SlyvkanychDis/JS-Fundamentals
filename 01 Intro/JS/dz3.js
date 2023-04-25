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
/*function randArray(k) {
    const res2 = [];
    for (let k = 1; k <= 20; k++){
   res2.push(Math.floor(Math.random() * (500 - 1) + 1));
    }
    return res2;
 }
console.log(randArray());*/

/*4.Написати функцію compact() яка має приймати на вхід масив, а на вихід має 
повертати значення нового масиву без повторень.
приклад:
const arr = [5, 3, 4, 5,6,7,3];
const arr2 = compact(arr);
console.log(arr2) ; // [5,3,4,6,7]*/
/*const arr = [5,3,4,5,6,7,3];
const arr2 = compact(arr);
function compact (arr){
  const arr2 = [];
  const tempArray =[...arr].sort();
  for (let i = 0; i<tempArray.length; i++){
    if (tempArray[i + 1] !== tempArray[i]){
      arr2.push(tempArray[i]);
    }
  }return arr2;
}
console.log(arr2); *//*version 1*/


/*const arr = [5, 3, 4, 5,6,7,3];
const arr2 = [...new Set(arr)];
console.log(arr2);*//*version 2*/

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
