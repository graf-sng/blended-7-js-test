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

const users =  ['Mango', 'Poly', 'Ajax'];
const logItems = function(array){

    for( let i = 0; i < users.length; i ++){
        // console.log(i);
        // console.log(users[i]);
        console.log(i, users[i]);
    }
}

logItems();