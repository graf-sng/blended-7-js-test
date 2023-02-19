//ДАВАЙТЕ ПЕРЕВІРЕМО ОБЛАСТЬ ВИДИМОСТІ Ф-ЦІЇ

// 1)
// let a = 5;
// let b = 10;

// function sum() {
//   let a = 50;
//   let b = 100;

//   return a + b;
// }
// console.log(sum());

// 2)
// let a = 5;
// let b = 10;

// function sum() {
//   return a + b;
// }
// console.log(sum())
// 3)
// let a = 5;
// let b = 10;

// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(100, 300))
// 4)
// let a = 5;
// let b = 10;

// function sum() {
//   let a = 10;

//   function sum2() {
//     let a = 30;
//     return a + b;
//   }

//   return a + b;
// }
// console.log(sum())
// 5)
// let a = 5;
// let b = 10;

// function sum() {
//   let a = sum2(); 

//   function sum2() {
//     let a = 30;
//     return a + b;
//   }

//   return a + b;
// }

// console.log(sum());




// ЗАДАЧА 1
// НАПИШІТЬ РЕЧЕННЯ ЗА ДОПОМОГОЮ ШАБЛОННОГО РЯДКА "ДОБРОГО ДНЯ,МЕНЕ ЗВАТИ ГАЛИНА, МЕНІ 35 РОКІВ, Я ВИВЧАЮ JAVASCRIPT"

// const userName = "ГАЛИНА";
// const userAge = 35;
// const userLang = "JAVASCRIPT";
// const testString = `ДОБРОГО ДНЯ,МЕНЕ ЗВАТИ ${userName}, МЕНІ ${userAge} РОКІВ, Я ВИВЧАЮ ${userLang}`;
// console.log(testString);

// ЗАДАЧА 2
// ЗАПИТАТИ У КОРИСТУВАЧА ІМЯ, ПОЧТУ , ТЕЛЕФОН, І ПОКАЗАТИ У КОНСОЛІ "КОРИСТУВАЧ __ ВИКОРИСТОВУЄ  __ ПОЧТУ І __ ТЕЛЕФОН"

// const usernName = prompt("Введіть ваше ім`я").toUpperCase();
// const userMail = prompt("Введіть вашу пошту");
// const userTel = prompt("Введіть ваш телефон");
// const testString = `КОРИСТУВАЧ ${usernName} ВИКОРИСТОВУЄ ${userMail} ПОЧТУ І ${userTel} ТЕЛЕФОН`;
// console.log(testString);

// ЗАДАЧА 3
// ПОРАХУЙТЕ СУМУ ТОВАРІВ У КОРЗИНІ . ПОТРІБНО ВВЕСТИ СУМУ 3-Х ТОВАРІВ І ПОРАХУВАТИ ЇХ СУМУ

// const var1 = Number(prompt("Enter price tel"));
// const var2 = +prompt("Enter price tab");
// const var3 = +prompt("Enter price desk");
// const result = var1 + var2 + var3;
// console.log(result);

// ЗАДАЧА 4
// ВИКОРИСТОВУЮЧИ КОНСТРУКЦІЮ IF...ELSE , НАПИШИ КОД, ЯКИЙ БУДЕ ЗАПИТУВАТИ:
// "СКІЛЬКИ МІСЯЦІВ МАЄ РІК", ЯКЩО КОРИСТУВАЧ ВВОДИТЬ 12 ТО У КОНСОЛІ ПИШЕ ВІРНО, ЯКЩО НЕ ПРАВИЛЬНО КОРИСТУВАЧ ВВІВ, ТОДІ У КОНСОЛІ ПИШЕ
// "НЕ ЗНАЄТЕ? 12"

// const year = Number(prompt('Скільки місяців має рік?'));

// if (year === 12) {
// 	console.log ("Вірно!!")
// }
// else { console.log("Не знаєте?? 12!!")}

// ЗАДАЧА 5
// НАПИШІТЬ ПРОГРАМУ, ЯКА ДОЗВОЛЯТИМЕ ЮЗЕРУ ВВОДИТИ ЧИСЛО І ОПРИДІЛЯТИМЕ ЧИ ЦЕ ПАРНЕ ЧИСЛО , ЧИ НЕ ПАРНЕ.

// const seq = Number(prompt('Введіть число'));

// const newNum = seq %2 === 0 ? "Так число парне!!" : "ні, чиссло не парне!!";
// console.log(newNum);

// if(seq %2 === 0) {
// 	console.log("Так число парне!!")
// } else {
// 	console.log("ні, чиссло не парне!!")
// }

// ЗАДАЧА 6
// НАПИШІТЬ ПРОГРАМУ , ДЕ МИ У КОРИСТОВАЧА ПИТАЄМОСЬ МІСЯЦЬ НАРОДЖЕННЯ, І ПОКАЗУЄМО У ЯКУ ПОРУ РОКУ ВІН НАРОДИВСЯ

// const yourMonth = Number(prompt('Введіть номер місяця вашого народження'));

// if (yourMonth === 12 || yourMonth === 1 || yourMonth === 2) {
// 	console.log("Зима")
// } else if (yourMonth >= 3 && yourMonth <= 5) {
// 	console.log("Весна")
// }
// else if (yourMonth >= 6 && yourMonth <= 8) {
// 	console.log("Літо")
// }
// else if (yourMonth >= 9 && yourMonth <= 11) {
// 	console.log("Осінь")
// }
// else {
// 	console.log("Альо, ти звідки??")
// }

// ЗАДАЧА 1
// БАЗОВІ ОПЕРАЦІЇ З МАСИВОМ
// 1)створіть масив styles з елементами «Джаз» і «Блюз»
// 2)добавте «Рок-н-ролл» в кінець
// 3)замініть значення в середині на «Классика»
// 4)видаліть перший елемент і виведіть його в консоль
// 5)вставте «Рэп» і «Регги» на початок масиву

// МАСИВ ПО ХОДІ ВИПОВНЕННЯ ОПЕРАЦІЇ
// Джаз, Блюз
// Джаз, Блюз, Рок-н-ролл
// Джаз, Классика, Рок-н-ролл
// Классика, Рок-н-ролл
// Рэп, Регги, Классика, Рок-н-ролл
// const genre = ['Джаз', 'Блюз'];
// genre.push('Рок-н-ролл');
// // console.log(genre);
// genre.splice(1,1,'Класика');
// // console.log(genre);

// // console.log(genre.shift());
// genre.unshift('Реп', 'Регі');
// console.log(genre);

// ЗАДАЧА 2
// Напишіть ф-цію logItems(array) , яка буде получати масив і використовуючи цикл for , який для кожного елемента масива буде виводити в консоль
// повідомлення у форматі <індекс елемента> та <значення елемента>.
// Номерація для кожного елемента масива ['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено 1 - Mango, а для индекса 2 выведет 3 - Ajax.

// const users =  ['Mango', 'Poly', 'Ajax'];
// const logItems = function(array){

//     for( let i = 0; i < users.length; i ++){
//         // console.log(i);
//         // console.log(users[i]);
//         console.log(i, users[i]);
//     }
// }

// logItems();
// ЗАДАЧА 3
// Напишіть код , який шукає саме найменше число в масиві
// 1) напишіть циклом for
// const numbers = [2, 17, 94, 1, 23, 37];
// 2) перепишіть функцією findSmallestNumber(numbers)
// console.log(findSmallestNumber([2, 17, 94, 1, 23, 37]));
// console.log(findSmallestNumber([49, 4, 83, 7, 12]));

// const numbers = [2, 17, 94, 1, 23, 37];
// let numberNew = numbers[0];
// for (const number of numbers) {
//     if (numberNew > number) {
//         numberNew = number;
//     }
// }
// console.log(numberNew);
/*
function findSmallestNumber(numbers) {
    let numberNew = numbers[0];
    for (const number of numbers) {
        if (numberNew > number) {
            numberNew = number;
        }
    } return numberNew;
}
console.log(findSmallestNumber([2, 17, 94, 1, 23, 37]));
console.log(findSmallestNumber([49, 4, 83, 7, 12]));
*/

/*
ЗАДАЧА 4
 Провірте , чи являється рядок полідромом*/ /*
const str = "ротатор"; //true
const newString = "Hello"; //false
*/
// const array = str.split("");
// //console.log(array);

// const arr2 = str.split("").reverse().join("");
// const arr3 = newString.split("").reverse().join("");

// console.log(arr2 === str);
// console.log(arr3 === newString);

// function qwe(str) {
//   let we = str.split("").reverse().join("");
//   return str === we;
// }

// console.log(qwe("Hello"));




// ------------------------

// ЗАДАЧА 5
// Напишіть ф-цію calculateAverage() яка приймає довільну кількість аргументів і повертає їх середнє значення .Всі аргументи будуть тільки числовими

// // console.log(calculateAverage(1, 2, 3, 4)); // 2.5
// // console.log(calculateAverage(14, 8, 2)); // 8
// // console.log(calculateAverage(27, 43, 2, 8, 36));// 23.2
// ЗАДАЧА 6
// Напишіть ф-цію greet(name) , яка при виклику буде получати імя (як приклад , "Василь"), і логінувати рядок "Привіт, <імя>".У випадку , відсутнього 
// відсутнього значення, виводе аргумент "Привіт , гість"
// // console.log(greet("Василь"));//Привіт Василь
// // console.log(greet());//Привіт гість
// ЗАДАЧА 7
// Виконайте рефакторинг замінивши обявлення ф-ції з function declaration на function expression та на стрілочну функцію
// // function checkNumbers(a, b) {
// //   if (a > b) {
// //     return `число ${a} більше ${b}`;
// //   }

// //   return `число ${b} більше ${a}`;
// // }
// ЗАДАЧА 8
// Напишіть ф-цію capitalize , яка буде приймати рядок і буде повертати новий рядок , де кожне слово буде з великої букви
// // capitalize('the quick brown fox')// 'The Quick Brown Fox '
// ЗАДАЧА 9
// Напишіть функцію для роботи з колекцією навчаючих курсів courses:

// addCourse(name) - добавляє курс у кінець колекції
// removeCourse(name) - видаляє курс із колекції
// updateCourse(oldName, newName)- змінює імя на нове
// const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];

// // addCourse("Express"); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// // addCourse("CSS"); // 'У вас уже є такий курс'
// // removeCourse("React"); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// // removeCourse("Vue"); // 'Курс з таким іменем не найдено'
// // updateCourse("Express", "NestJS"); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']
// console.log(courses);