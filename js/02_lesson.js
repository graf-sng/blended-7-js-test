
// ЗАДАЧА 1
// Напишіть скрипт,для обєкта user в послідовності:

//  добавляє поле mood із значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення  premium на false
// виводить отримане обєкта user в форматі ключ:значення використовуючи  Object.keys() и for...of

 const user = {
   name: "Mango",
   age: 20,
   hobby: "html",
   premium: true,
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;


const ourKeys = Object.keys(user);
// console.log(ourKeys(ourKeys));
for(let key of ourKeys) {
	
	console.log(`${key}: ${user[key]}`);

}