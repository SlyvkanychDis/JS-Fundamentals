
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