class Employee {
    constructor(name, position, salary, experience) {
        this.name = name;
        this.position = position;
        this.salary = salary;
        this.experience = experience;
    }
}

class EmpTable {
    constructor(employees) {
        this.employees = employees;
    }

    getHtml() {
        if (this.employees.length === 0) {
            return "<p>Немає працівників</p>";
        }

        let html = "<table>";
        html += "<tr><th>Ім'я</th><th>Посада</th><th>Зарплата</th><th>Досвід</th></tr>";
        
        for (let i = 0; i < this.employees.length; i++) {
            html += "<tr>";
            html += "<td>" + this.employees[i].name + "</td>";
            html += "<td>" + this.employees[i].position + "</td>";
            html += "<td>" + this.employees[i].salary + " грн</td>";
            html += "<td>" + this.employees[i].experience + "</td>";
            html += "</tr>";
        }
        
        html += "</table>";
        return html;
    }
}

const bankEmployees = [
    new Employee("Олександр Коваленко", "Керуючий відділенням", 45000, 8),
    new Employee("Марія Шевченко", "Кредитний експерт", 28000, 5),
    new Employee("Іван Бондаренко", "Касир", 18000, 3),
    new Employee("Олена Лисенко", "Операціоніст", 22000, 4),
    new Employee("Андрій Петренко", "Спеціаліст підтримки", 20000, 2),
    new Employee("Наталія Гриценко", "Начальник відділу", 55000, 10)
];

const empTable = new EmpTable(bankEmployees);
document.getElementById("result").innerHTML = empTable.getHtml();