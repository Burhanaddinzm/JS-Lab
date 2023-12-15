//// (1-3 Table)
// const tableEl = document.getElementById("table");

//// 1

// let kod = "";

// for (let i = 0; i < 5; i++) {
//   kod += `<tr>`;
//   for (let j = 0; j < 5; j++) {
//     if (i % 2 == 0) {
//       if (j % 2 == 0) {
//           kod += `<td>0</td>`;
//         } else {
//           kod += `<td>1</td>`;
//       }
//     } else {
//       if (j % 2 == 0) {
//         kod += `<td>1</td>`;
//       } else {
//         kod += `<td>0</td>`;
//       }
//     }
//   }
//   tableEl.innerHTML = kod;
// }

//// 2

// let kod = "";
// let count1 = 1;
// let count2 = count1;

// for (let i = 0; i < 5; i++) {
//   kod += `<tr>`;
//   for (let j = 0; j < 5; j++) {
//     kod += `<td>${count2}</td>`;
//     count2++;
//   }
//   count1++;
//   count2 = count1;
//   tableEl.innerHTML = kod;
// }

////3

// let kod = "";

// for (let i = 1; i <= 5; i++) {
//   kod += `<tr>`;
//   for (let j = 1; j <= 5; j++) {
//     if (i - j >= 0) {
//       kod += `<td>${j}</td>`;
//     }
//   }
//   kod += `</tr>`;
//   tableEl.innerHTML = kod;
// }

////4 - Input-Button

// const ulEl = document.querySelector("ul");
// const btn = document.querySelector("button");
// const inputEl = document.querySelector("input");

// btn.addEventListener("click", () => {
//   if (inputEl.value.trim()) {
//     ulEl.innerHTML += `<li>
//           <p>${inputEl.value}</p>
//           </li>`;
//   }else {
//     alert("Enter input");
//   }
//   inputEl.value = "";
// });

////5 - Flag

// let color = "";

// const redBtn = document.getElementById("red");
// const greenBtn = document.getElementById("green");
// const blackBtn = document.getElementById("black");

// const flagEl = document.querySelectorAll(".flag");

// redBtn.addEventListener("click", () => {
//   color = "red";
// });

// greenBtn.addEventListener("click", () => {
//   color = "green";
// });

// blackBtn.addEventListener("click", () => {
//   color = "black";
// });

// flagEl.forEach((flag, i) => {
//   flag.addEventListener("click", () => {
//     flag.style.backgroundColor = color;
//   });
// });

////6 - Swapper

const input1El = document.getElementById("input1");
const input2El = document.getElementById("input2");
const btn = document.querySelector("button");

let oldValue = "";
btn.addEventListener("click", () => {
  oldValue = input1El.value;
  input1El.value = input2El.value;
  input2El.value = oldValue;
});
