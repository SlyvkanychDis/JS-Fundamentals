
/*1.Напишіть клас Круг та реалізуйте функціонал:
- Визначте конструктор, який запитує координати центру кола, його радіус та ініціалізує об'єкт;
- Визначте метод отримання довжини кола для поточного об'єкта (L = 2 * π * R);
- Визначте статичний метод, який приймає радіус та повертає довжину кола для заданого радіусу;
- Визначте метод отримання об'єкта-кола, який повертає копію поточного об'єкта;
- Визначте статичний метод, який приймає координати центра кола, його радіус та повертає об'єкт кола із заданими параметрами;
- Визначте метод перевірки попадання крапки до кола;
- Визначте метод перетворення поточного стану об'єкта на символьний рядок (toString()).*/

/*
class Circle {
    constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    }
    getLength() {
        return 2 * Math.PI * this.radius;
    }
    static getLengthByRadius(radius) {
        return 2 * Math.PI * radius;
    }
    getObject() {
        return new Circle(this.x, this.y, this.radius);
    }
    
    static getCircle(x, y, radius) {
        return new Circle(x, y, radius);
    }
    isInside(x, y) {
        return Math.sqrt((x - this.x) ** 2 + (y - this.y) ** 2) <= this.radius;
    }
    toString() {
        return `Circle with center at (${this.x},${this.y}) and radius ${this.radius}`;
    }
    }
    
    // Usage examples:
    const circle1 = new Circle(1, 8, 5);
    console.log(circle1.getLength()); // 31.41592653589793
    console.log(Circle.getLengthByRadius(5)); // 31.41592653589793
    const circle2 = circle1.getObject();
    console.log(circle1 === circle2); // false
    console.log(circle1.isInside(2, 2)); // true
    console.log(circle1.toString()); // "Circle with center at (1,8) and radius 5"*/

/*2.Напишіть функцію propsCount(currentObject), яка приймає об’єкт і визначає кількість властивостей цього об’єкта.
Наприклад:*/
/*
function propsCount(currentObject) {
    return Object.keys(currentObject).length;
    }
let mentor = {
    course: "JS fundamental",
    duration: 3,
    direction: "web-development",
   // age: 30,
    city: "Lviv"
    };
    console.log(propsCount(mentor)); */

/*3.Створіть клас Person, у якого конструктор приймає параметри name і surname, а також міститься метод showFullName(), який виводить у консоль ім’я і прізвище особи. 
- Від класу Person наслідується клас Student, конструктор якого крім name і surname, приймає параметр year (рік вступу до університету). 
- В класі Student необхідно перевизначити метод showFullName(midleName), щоб виводилося не лише ім’я, прізвище, але і по-батькові (midleName) студента. 
- Також в класі Student необхідно реалізувати метод showCourse(), який виводитиме поточний курс студента (від 1 до 6). 
Значення курсу визначатиметься як різниця поточного року (визначити самостійно) і року вступу до ВНЗ.
Приклад результату:
const stud1 = new Student("Petro", "Petrenko", 2019);
console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
console.log("Current course: " + stud1.showCourse()); //Current course: 4*/
/*
class Person {
    constructor(name, surname) {
    this.name = name;
    this.surname = surname;
}
        showFullName (){
        console.log(`${this.name} ${this.surname}`)
    }
}
class Student extends Person {
    constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
    }
        showFullName(midleName) {
        console.log(`${this.surname} ${this.name} ${midleName}`);
    }
        showCourse() {
    const currentYear = new Date().getFullYear();
    const course = currentYear - this.year;
        return Math.max(Math.min(course, 6), 1);;
    }
}
    const stud1 = new Student("Ivanov", "Ivan", 2019);
    console.log(stud1.showFullName("Petrovych")); 
    console.log("Current course: " + stud1.showCourse()); */

/* 4.   А. Реалізувати клас, який описує простий маркер. У класі мають бути такі компоненти:
     - поле, яке зберігає колір маркера;
     - поле, яке зберігає кількість чорнила в маркері (у відсотках);
     - метод друку (метод приймає рядок і виводить текст відповідним кольором;
    текст виводиться до тих пір, поки в маркері є чорнило; один не пробіловий символ – це 0,5% чорнила в маркері).
    В. Реалізувати клас, що описує маркер, що заправляється, успадкувавши його від простого маркера і додавши 
    метод для заправки маркера. Продемонструвати роботу написаних методів*/
/*
    class Marker {
        constructor(color, inkPercentage) {
          this.color = color;
          this.inkPercentage = inkPercentage;
        } 
        print(text) {
          let inkPerChar = 0.5; // 0.5% ink
          let textLength = text.replace(/\s/g, '').length; // remove space
          let inkNeeded = inkPerChar * textLength;
          if (inkNeeded > this.inkPercentage) {
            text = text.slice(0, this.inkPercentage / inkPerChar);
            this.inkPercentage = 0;
          } else {
            this.inkPercentage -= inkNeeded;
          }
          console.log(`%c${text}`, `color: ${this.color}`);
        }
      }
      class RefillableMarker extends Marker {
        refill(inkAmount) {
          this.inkPercentage += inkAmount;
          if (this.inkPercentage > 100) {
            this.inkPercentage = 100;
          }
          console.log(`Marker refilled. Current ink level: ${this.inkPercentage}%`);
        }
      }
      const marker1 = new RefillableMarker('red', 50);
      marker1.print('     Test with replacing space                    ..'); // 24 token 
      console.log(`Ink level: ${marker1.inkPercentage}%`); 
      marker1.print('Sed do eiusmod tempor incididunt ut labore et dolagna aliqua.'); 
      marker1.refill(30); 
      marker1.print('Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'); // part of text
      console.log(`Ink level: ${marker1.inkPercentage}%`); */   

   /* 5. Створіть клас Worker який буде мати конструктор, який приймає наступні властивості: fullName (ім’я і прізвище), dayRate (ставка за день роботи), 
      workingDays (кількість відпрацьованих днів). 
      1) клас повинен мати метод showSalary(), який буде виводити зарплату працівника. Зарплата - це добуток ставки dayRate на кількість відпрацьованих днів workingDays. 
      2) додати приватне поле experience і присвоїти йому значення 1.2 і використовувати його як додатковий множник при визначенні 
      зарплати – створити метод showSalaryWithExperience(). Вивести значення зарплати з цим коефіцієнтом.
      3) додати гетери і сетери для поля experience. Встановити значення experience = 1.5 і вивести його на екран.
      4) Вивести значення зарплати з новим experience.
      5) Створити кілька екземплярів класу (працівників) з різними зарплатами, як показано в прикладі нижче. Посортувати зарплату працівників із найбільшим experience 
      по зростанню і вивести результат в форматі:   worker_fullName: salary_value 
      6) Реалізувати динамічне сортування для будь-кої кількості працівників-екземплярів класу Worker.*/

    class Worker {
        constructor (fullName, dayRate, workingDays){
            this.fullName = fullName;
            this.dayRate = dayRate;
            this.workingDays = workingDays;
            this._experience = 1.2;
        }
        showSalary(){
            const salary =  this.dayRate * this.workingDays;
            console.log(`${this.fullName} salary: ${salary}`);
        }
        showSalaryWithExperience() {
            const salaryExp = this.dayRate * this.workingDays * this._experience;
            console.log(`${this.fullName} salary: ${salaryExp}`);
        }
        get experience() {
            return this._experience;
        }
        set experience(value) {
            this._experience = value;
          }
        }
        
    const worker1 = new Worker('John Smith', 20, 23);
    const worker2 = new Worker('Tom Tomson', 48, 22);
    const worker3 = new Worker('Andy Ander', 29, 23);
    
    worker1.showSalary();
    console.log("New experience: " + worker1.experience);
    worker1.showSalaryWithExperience();
    worker1.experience = 1.5;
    console.log("New experience: " + worker1.experience);
    worker1.showSalaryWithExperience();

    console.log(worker2.fullName);
    worker2.showSalary();
    console.log("New experience: " + worker2.experience);
    worker2.showSalaryWithExperience();
    worker2.experience = 5;
    console.log("New experience: " + worker2.experience);
    worker2.showSalaryWithExperience();

    console.log(worker3.fullName);
    worker3.showSalary();
    console.log("New experience: " + worker3.experience);
    worker3.showSalaryWithExperience();
    worker3.experience = 3;
    console.log("New experience: " + worker3.experience);
    worker3.showSalaryWithExperience();

