// //3

// function washDishes() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Посуд вимито");
//     }, 2000);
//   });
// }

// function cleanRoom() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Кімнату прибрано");
//     }, 4000);
//   });
// }

// function makeDinner() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Вечеря приготована");
//     }, 7000);
//   });
// }

// washDishes()
//   .then((message) => {
//     console.log(message);
//     return cleanRoom();
//   })
//   .then((message) => {
//     console.log(message);
//     return makeDinner();
//   })
//   .then((message) => {
//     console.log(message);
//     console.log("Всі справи виконані");
//   })
//   .catch((error) => {
//     console.error("Помилка:", error);
//   });

// //4
// function sortArray(array) {
// return new Promise((resolve, reject) => {
//     if (!array.length) reject("Array is empty");
//          else {
//        setTimeout(() => {
//          const sorted = [...array].sort((a, b) => a - b);
//          localStorage.setItem("sortedArray", JSON.stringify(sorted));
//          resolve(sorted);
//        }, 2000);
//      }
//    });
//  }

//  sortArray([5, 2, 9, 1, 7])
//    .then(arr => console.log("Sorted array:", arr))
//    .catch(err => console.error(err));

//5

function multiplyAsync(a, b) {
  return new Promise((resolve, reject) => {
    if (typeof a !== "number" || typeof b !== "number")
      reject("Invalid values");
    else {
      setTimeout(() => resolve(a * b), 2000);
    }
  });
}

async function main() {
  try {
    const result = await multiplyAsync(6, 9);
    console.log("Multiplication result:", result);
  } catch (e) {
    console.error(e);
  }
}

main();