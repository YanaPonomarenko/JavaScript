const cl = console.log;
const form = document.forms.formcard;
const inputs = form.querySelectorAll("input, textarea, select");

const users = [];

const countrySelect = form.country;
const option = document.createElement('option');
option.value = 'Німеччина';
option.text = 'Німеччина';
option.selected = true;
countrySelect.appendChild(option);

const genderSelect = form.gender;
const option2 = document.createElement('option');
option2.value = 'Чоловік';
option2.text = 'Чоловік';
option2.selected = true;
genderSelect.appendChild(option2);

inputs.forEach((input) => {
    input.addEventListener("focus", (e) => {
        e.target.classList.remove("error");
    });
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    let valid = true;

    const name = form.name.value.trim();
    const surname = form.surname.value.trim();
    if (name.length < 2 || /\d/.test(name)) {
        form.name.classList.add("error");
        valid = false;
    }
    if (surname.length < 2 || /\d/.test(surname)) {
        form.surname.classList.add("error");
        valid = false;
    }

    const email = form.email.value.trim();
    if (!email.includes('@')) {
        form.email.classList.add("error");
        valid = false;
    }

    const password = form.password.value;
    if (password.length < 5 || password.includes(' ')) {
        form.password.classList.add("error");
        valid = false;
    }

    if (!form.birthdate.value) {
        form.birthdate.classList.add("error");
        valid = false;
    }

    const phone = form.phone.value.trim();
    if (!/^\+380\d{9}$/.test(phone)) {
        form.phone.classList.add("error");
        valid = false;
    }

    const skills = document.querySelectorAll('input[name="skills"]:checked');
    if (skills.length < 2) {
        valid = false;
    }

    const comment = form.comment.value.trim();
    if (comment.length < 10 || comment.length > 150) {
        form.comment.classList.add("error");
        valid = false;
    }

    if (!form.agreement.checked) {
        valid = false;
    }

    if (valid) {
        document.getElementById('message').innerHTML = '<p style="color:green">Все заповнено вірно</p>';
        
        const user = {
            name, 
            surname, 
            email, 
            password, 
            birthdate: form.birthdate.value,
            phone, 
            country: form.country.value, 
            gender: form.gender.value,
            skills: Array.from(skills).map(s => s.value),
            comment, 
            agreement: form.agreement.checked
        };

        users.push(user);
        cl(users);
    } else {
        document.getElementById('message').innerHTML = '<p style="color:red">Помилка</p>';
    }
});