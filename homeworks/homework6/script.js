class ExtendedDate extends Date {
    getDateText() {
        const months = ["січня", "лютого", "березня", "квітня", "травня", "червня", "липня", "серпня", "вересня", "жовтня", "листопада", "грудня"];
        return `${this.getDate()} ${months[this.getMonth()]}`;
    }

    isFutureOrPresent() {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const thisDate = new Date(this);
        thisDate.setHours(0, 0, 0, 0);
        return thisDate >= today;
    }

    isLeapYear() {
        const year = this.getFullYear();
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }

    getNextDate() {
        const nextDate = new ExtendedDate(this);
        nextDate.setDate(this.getDate() + 1);
        return nextDate;
    }
}

function checkDate() {
    const dateValue = document.getElementById("dateInput").value;
    
    if (!dateValue) {
        document.getElementById("output").innerHTML = "<p>Виберіть дату</p>";
        return;
    }
    
    const myDate = new ExtendedDate(dateValue);
    
    document.getElementById("output").innerHTML = `
        <p>Дата: ${myDate.getDateText()}</p>
        <p>Високосний рік: ${myDate.isLeapYear()}</p>
        <p>Майбутня або поточна: ${myDate.isFutureOrPresent()}</p>
        <p>Наступна дата: ${myDate.getNextDate().getDateText()}</p>
    `;
}