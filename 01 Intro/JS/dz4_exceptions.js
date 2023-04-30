/*1.
Напишіть функцію sumSliceArray(arr, first, second), яка приймає масив arr і два 
числа (first и second) – порядкові номери елементів масиву, які необхідно скласти. Наприклад, 
якщо ввели 3 та 5 – сумуються 3-й та 5-й елементи.Функція повинна генерувати винятки, якщо були введені не числа, 
і коли одне з чисел або обидва більшого розміруза довжину 
масиву. Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків.*/

/*function sumSliceArray(arr, first, second) {
    if (
      typeof first !== "number" || typeof second !== "number" ||
      isNaN(first) || isNaN(second))
    {
      throw new Error("Номери елементів мають бути числами!");
    }
      if (first >= arr.length || second >= arr.length) {
      throw new Error("Номер елементу перевищує розмір масиву!");
    }
      return arr[first-1] + arr[second-1];
  }
    try {
    const myArray = [1, 2, 3, 4, 5];
    const result = sumSliceArray(myArray, 1, 2);        //test 1
    console.log(result); 
    const wrongResult = sumSliceArray(myArray, 1, "a")  //test 2
    console.log(wrongResult);
  } catch (error) {
    console.error(error.message);
  }*/
  

  /*2.Створіть функцію checkAge(), яка запитує у користувача його ім'я, вік та статус 
  (адмін, модератор, користувач) та генерує модальне вікно з помилкою, якщо:вік користувача менше 
  18 або більше 70 років (генерується помилка типу RangeError).користувач не ввів жодних даних в будь-якому 
  полі (виводиться повідомлення The field is empty! Please enter your age з типом помилки Error). У полі статус введено неправильне 
  слово (тип помилки EvalError).в полі вік введено нечислове значення. У всіх інших випадках користувач отримає доступ до перегляду фільму. 
  У блоці catch передбачена можливість виведення назви та опису помилки.*/

  /*function checkAge() {
    const name = prompt ('fill in your name');
    const age = prompt ('fill in your age');
    const status = prompt ('fill in your status (user, admin, moderator?)');
    try{
        if (!age) {
        throw new Error ('the field is emply! please fill in your age (number)');
    
    }
    if (name !== String){
        throw new TypeError ('fill in correct name');
    }
    const ageNumber = Number(age);
        if (isNaN(ageNumber)){
            throw new TypeError ('please fill in your age using numbers');
        }
        if ( ageNumber > 70){
            throw new RangeError ('you are very old');
        }
        if ( ageNumber < 18){
            throw new RangeError ('you are very young');
        }
        if (status !== 'admin' && status !== 'user' && status !== 'moderator'){
            throw new EvalError ('status filled incorrectly');
        }

        alert (`welcome, ${name}`);
    }catch (error) {
        alert(`Error: ${error.name}. ${error.message}`);
      }
  }
  checkAge();*/

  /*3.  Реалізуйте функцію calcRectangleArea(width, height), яка приймає 2 параметри ширина 
  прямокутника width і висота прямокутника height і обраховує його площу. Передбачити припинення виконання програми
   і генерацію винятку у випадку, якщо функції передано не числові параметри.
  Напишіть код, який використовує цю функцію та обробляє можливі виняткові ситуації.*/ 

 /* function calcRectangleArea(width, height) {
    let firstNum = +prompt ("fill in number first");
    let secondNum = +prompt ("fill in number second");
    let result = firstNum * secondNum;
    try{
        if (isNaN(firstNum) || isNaN(secondNum)) {
            throw new TypeError ('please, fill in number');
        }
        if (firstNum <= 0 || secondNum <=0){
            throw new RangeError ('you filled 0 or number lower 0');
        }
    }catch (error) {
        alert(`Error: ${error.name}. ${error.message}`);
  }
   alert(`the area of the rectangle is equal to: ${result} !!!`);
}
  calcRectangleArea();*/


  /*4.  Створіть клас MonthException, конструктор якого приймає параметр message і ініціалізує 
  поле name значенням MonthException.
  Реалізуйте функцію showMonthName(month), в якій параметр month – це порядковий номер місяця в році. 
  Функція повертає назву місяця відповідно до введеного номера місяця. У випадку некоректного вводу кидається ексепшн у 
  вигляді об’єкта класу MonthException з повідомленням Incorrect month number.
  Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків.
  Приклад роботи програми:
  console.log(showMonthName(5));  // May
  console.log(showMonthName(14)); // MonthException Incorrect month number */

 class MonthException {
  constructor(message){
    this.message = message;
    this.name = 'MonthException';
  }
 }
function showMonthName(month) {
  month = month - 1; //array month
  let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  if(months[month] !== undefined){
    return months[month];
  }else {
    throw new MonthException('Incorrect months number');
  }
}
try{
  let myMonth = 8;
  let monthName = showMonthName(myMonth);
  console.log(monthName);
}catch (e){
  console.log(e.name, e.message);
}
  
  /*5.Реалізуйте функцію showUser(id), яка приймає параметром користувацьке id і повертає об’єкт, який містить значення переданої id. 
  Також функція викидає помилку у разі якщо введено від’ємне id.  Реалізуйте функцію showUsers(ids), яка приймає параметром масив користувацьких айді ids, 
  перевіряє з використанням функції showUser()   кожен елемент масиву ids на коректність, в разі виключної 
  ситуації виводить повідомлення про помилку. Функція showUsers(ids) повертає масив об’єктів, де значеннями ключів є коректні елементи ids.*/
  
  /*function showUser(id) {
    if (id < 0) {
      throw new Error("Id must be a positive number.");
    }
        const user = {id: id};
    return user;
  }
  
  function showUsers(ids) {
    const validUsers = [];
    
    ids.forEach(id => {
      try {
        const user = showUser(id);
        validUsers.push(user);
      } catch (error) {
        console.error(error.message);
      }
    });
    console.log(`id : ${ids}`);
    return validUsers;
    }  
  showUsers([7, -212, 44, 22]); //test 1
  showUsers([7, 12, 44, 22]);   //test 2*/