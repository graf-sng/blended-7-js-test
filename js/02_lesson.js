// ЗАДАЧА 1
// Напишіть скрипт,для обєкта user в послідовності:

//  добавляє поле mood із значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення  premium на false
// виводить отримане обєкта user в форматі ключ:значення використовуючи  Object.keys() и for...of

//  const user = {
//    name: "Mango",
//    age: 20,
//    hobby: "html",
//    premium: true,
// };

// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;

// const ourKeys = Object.keys(user);
// // console.log(ourKeys(ourKeys));
// for(let key of ourKeys) {

// 	console.log(`${key}: ${user[key]}`);

// }
// ЗАДАЧА 2
// У вас є обєкт , у якому зберігаються зарплати нашої команди.
// Напишіть код , для підрахунку всіх зарплат і збережіть результат в змінні sum
// Повинно получитись 390, якщо обєкт salaries пустий , то результат буде 0
// ЩОБ МОЖНА БУЛО ПЕРЕВИКОРИСТОВУВАТИ ЛОГІКУ, ТОМУ ПИШЕМО ФУНКЦІЮ

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };
// function total(salaries) {
//   const values = Object.values(salaries);
//   let sum = 0;
//   for (let value of values) {
//     sum += value;
//   }
//   return sum;
// }
// console.log(total(salaries));

// ЗАДАЧА 3
// Створи обєкт calculator(калькулятор) з 3-ма методами:
// read()- запитує 2 значення у юзера і зберігає їх як значення обєкта;
// sum() -повертає суму збережених значень;
// mult() -перемножує значення збережені і повертає результат;

const calculator = {
  a: null,
  b: null,

  read() {
    this.a = Number(prompt('введіть значення а'));
    this.b = Number(prompt('введіть значення b'));
  },

  sum() {
    return this.a + this.b;
  },

  mult() {
    return this.a * this.b;
  },
};
calculator.read();
console.log(`sum`, calculator.sum());
console.log(`mult`, calculator.mult());
