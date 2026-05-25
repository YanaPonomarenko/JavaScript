//1) functions declaration
function f1(a,b) {
    let str = "";
    for (let i = 0; i < arguments.length; i++) {
        str += arguments[i] + " ";
    }
    console.log(str);
}
f1(2,3,4);
f1(7,8)

//2)
//3)

const arr = [4,2,7];
arr.push(arr[0]);
arr[0] = 12;
console.log(arr);


//1
let monthNumber = prompt("Введіть номер місяця (1-12):");
monthNumber = Number(monthNumber);

switch(monthNumber) 
{
    case 1:
        alert("Січень");
        break;
    case 2:
        alert("Лютий");
        break;
    case 3:
        alert("Березень");
        break;
    case 4:
        alert("Квітень");
        break;
    case 5:
        alert("Травень");
        break;
    case 6:
        alert("Червень");
        break;
    case 7:
        alert("Липень");
        break;
    case 8:
        alert("Серпень");
        break;
    case 9:
        alert("Вересень");
        break;
    case 10:
        alert("Жовтень");
        break;
    case 11:
        alert("Листопад");
        break;
    case 12:
        alert("Грудень");
        break;
    default:
        alert("Немає такого місяця");
}


//2
let num1 = prompt("Введіть перше число:");
num1 = Number(num1);
let num2 = prompt("Введіть друге число:");
num2 = Number(num2);
let operator = prompt("Введіть знак (+, -, *, /):");
let result;

switch(operator) 
{
    case "+":
        result = num1 + num2;
        console.log(result);
        break;
    case "-":
        result = num1 - num2;
        console.log(result);
        break;
    case "*":
        result = num1 * num2;
        console.log(result);
        break;
    case "/":
        if(num2 !== 0) {
            result = num1 / num2;
            console.log(result);
        } else {
            console.log("На нуль ділити не можна");
        }
        break;
    default:
        console.log("Невідома операція");
}

//3
let a = Number(prompt("Введіть перше число:"));
let b = Number(prompt("Введіть друге число:"));

let result = a > b ? a : b;
console.log("Більше число: " + result);

//4
let num = Number(prompt("Введіть число:"));

let result = num % 5 === 0 ? "Кратне 5" : "Не кратне 5";
console.log(result);

//5
let planet = prompt("Введіть назву планети:");

let message = planet === "Земля" || planet === "земля" ? "Привіт, землянине!" : "Привіт, інопланетянине!";
console.log(message);

//6
let number = 1000;
let count = 0;

do 
{
    number = number / 2;
    count = count + 1;
} while (number >= 50);

alert("Отримане число: " + number);
alert("Кількість поділів: " + count);

//7
let num = Number(prompt("Введіть число:"));

for (let i = 1; i <= 100; i++) 
    {
    if (i % num === 0) {
        console.log(i);
    }
}