
// let phoneRegex = /^\+\d{3}\(\d{2}\)-\d{2}-\d{3}-700$/;

// let userPhone;
// do {
//     userPhone = prompt("Enter number:");
//     if (phoneRegex.test(userPhone)) {
//         alert("Success");
//         break;
//     } else {
//         alert("Error");
//     }
// } while (true);

import User from "./User.js";
const user = new User("misha");
//const p = document.querySelector("name");
const p = document.getElementById("name");
p.innerText= user.show();