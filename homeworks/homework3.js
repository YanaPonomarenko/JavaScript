//1
"use strict";

const car = {
    manufacturer: "Mercedes-Benz",
    model: "S-Class",
    year: 2023,
    averageSpeed: 95, 
    
    showInfo: function() {
        console.log(`Автомобіль: ${this.manufacturer} ${this.model}`);
        console.log(`Рік випуску: ${this.year}`);
        console.log(`Середня швидкість: ${this.averageSpeed} км/год`);
    },

    calculateTime: function(distance) {
        let time = distance / this.averageSpeed; 
        let breaks = Math.floor(time / 4);
        if (time % 4 === 0 && time > 0) {
            breaks--;
        }
        let totalTime = time + breaks;
        
        let hours = Math.floor(totalTime);
        let minutes = Math.round((totalTime - hours) * 60);
        
        console.log(`Для подолання ${distance} км потрібно:`);
        console.log(`Час їзди: ${time.toFixed(1)} год`);
        console.log(`Кількість перерв: ${breaks}`);
        console.log(`Загальний час: ${hours} год ${minutes} хв`);
        
        return totalTime;
    }
};
car.showInfo();
car.calculateTime(500);

//2
"use strict";

const printMachine = {
    fontSize: "17px",
    fontColor: "black",
    fontFamily: "Times New Roman",

    print: function(text) {
        alert(`Розмір шрифту: ${this.fontSize}\n` +
              `Колір шрифту: ${this.fontColor}\n` +
              `Сімейство шрифту: ${this.fontFamily}\n` +
              `Текст: ${text}`);
    }
};

setTimeout(() => {
    printMachine.print("Тестовий текст");
}, 5000);

console.log("Скрипт запущено");