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
      return arr[first] + arr[second];
  }
    try {
    const myArray = [1, 2, 3, 4, 5];
    const result = sumSliceArray(myArray, 1, 2);        //test 1
    console.log(result); 
    const wrongResult = sumSliceArray(myArray, 1, "a")  //test 2
    console.log(wrongResult);
  } catch (error) {
    console.error(error.message);
  }
  */

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

  