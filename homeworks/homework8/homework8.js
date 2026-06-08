function showCalendar() {
    let month = parseInt(document.getElementById('month').value);
    let year = parseInt(document.getElementById('year').value);
    
    if (month < 1 || month > 12 || !year) {
        document.getElementById('calendar').innerHTML = '<p style="color:red">Error!</p>';
        return;
    }
    
    let monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
                     'July', 'August', 'September', 'October', 'November', 'December'];
    
    let daysInMonth = new Date(year, month, 0).getDate();
    let firstDay = new Date(year, month-1, 1).getDay();
    
    let html = `<h3>${monthNames[month-1]}, ${year}</h3>`;
    html += '<table>';
    html += '<tr><th>MON</th><th>TUE</th><th>WED</th><th>THU</th><th>FRI</th><th>SAT</th><th>SUN</th></tr>';
    html += '<tr>';
    
    let day = 1;
    for (let i = 0; i < 7; i++) {
        if (i < firstDay) {
            html += '<td></td>';
        } else {
            html += `<td>${day}</td>`;
            day++;
        }
    }
    html += '</tr>';
    
    while (day <= daysInMonth) {
        html += '<tr>';
        for (let i = 0; i < 7; i++) {
            if (day <= daysInMonth) {
                html += `<td>${day}</td>`;
                day++;
            } else {
                html += '<td></td>';
            }
        }
        html += '</tr>';
    }
    
    html += '</table>';
    document.getElementById('calendar').innerHTML = html;
}

showCalendar();