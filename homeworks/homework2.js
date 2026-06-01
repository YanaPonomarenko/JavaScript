//1.Підрахуйте суму всіх чисел у заданому користувачем діапазоні.

let start = +prompt("Введіть початок діапазону");
let end = +prompt("Введіть кінець діапазону");

let sum = 0;
for (let i = start; i <= end; i++) {
    sum += i;
}
console.log(`Сума чисел від ${start} до ${end} = ${sum}`);

//2.Запросіть 2 числа і знайдіть тільки найбільший спільний дільник.

let a = Number(prompt("Введіть перше число"));
let b = Number(prompt("Введіть друге число"));

while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
}
console.log(`Найбільший спільний дільник= ${a}`);

//3.Запросіть у користувача число та виведіть усі дільники цього числа.

let num = Number(prompt("Введіть число"));
let divisors = [];

for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
        divisors.push(i);
    }
}

console.log(`Дільники числа ${num}: ${divisors.join(", ")}`);

//4.Визначте кількість цифр у введеному числі.

let num = Number(prompt("Введіть число"));

if (num < 0) {
    num = -num;
}
let count = 0;
do {
    num = Math.floor(num / 10);
    count++;
} while (num > 0);

console.log(`Кількість цифр: ${count}`);

//6.ацикліть калькулятор. Запросіть у користувача 2 числа і знак, розв'яжіть приклад, виведіть результат і запитайте, чи хоче він розв'язати ще один приклад. І так триватиме доти, доки користувач не відмовиться.

let again;
do {
    let a = Number(prompt("Введіть перше число"));
    let b = Number(prompt("Введіть друге число"));
    let op = prompt("Введіть знак (+, -, *, /)");
    let result;

    switch (op) {
        case "+": result = a + b; break;
        case "-": result = a - b; break;
        case "*": result = a * b; break;
        case "/": result = a / b; break;
        default: result = "Невідома операція";
    }

    alert(`Результат: ${result}`);
    again = confirm("Бажаєте розв'язати ще один приклад?");
} while (again);

//9.Виведіть таблицю множення для всіх чисел від 2 до 9. Кожне число необхідно помножити на числа від 1 до 10.

for (let i = 2; i <= 9; i++) {
    console.log(`Таблиця множння для ${i}:`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
    console.log("-----");
}