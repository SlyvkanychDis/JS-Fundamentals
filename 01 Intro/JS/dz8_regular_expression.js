/*1.Напишіть функцію, яка перевірятиме чи перший символ в рядку написаний в верхньому регістрі, чи ні. 
Приклад роботи:*/

function upperCase(str) {
    if (/^[A-Z]/.test(str)) {
      return "String's starts with uppercase character";
    }
    return "String's not starts with uppercase character";
  }
console.log(upperCase('regexp')); // "String's not starts with uppercase character"
console.log(upperCase('RegExp')); // "String's starts with uppercase character"

/*2.Напишіть функцію, яка приймає рядкові дані і виконує перевірку на їх відповідність емейлу. Валідними вважаються всі символи на різних позиціях.
Приклад роботи:*/

function checkEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
console.log(checkEmail("Qmail@gmail.com"));