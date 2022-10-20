// import { interval, scan } from 'rxjs';
// import { filter, map, take } from 'rxjs';

// const btn = document.getElementById('interval');
// const rxjsBtn = document.getElementById('rxjs');
// const display = document.querySelector('#problem .result');

// const people = [
//   { name: 'Random', age: 25 },
//   { name: 'Elena', age: 17 },
//   { name: 'Ivan', age: 18 },
//   { name: 'Igor', age: 14 },
//   { name: 'Lisa', age: 32 },
//   { name: 'Irina', age: 23 },
//   { name: 'Oleg', age: 20 },
// ];

// btn.addEventListener('click', () => {
//   btn.disabled = true;
//   let i = 0;
//   const legals = [];
//   const interval = setInterval(() => {
//     if (people[i]) {
//       if (people[i].age >= 18) {
//         legals.push(people[i].name);
//       }
//       display.textContent = legals.join(' ');
//       i++;
//     } else {
//       clearInterval(interval);
//       btn.disabled = false;
//     }
//   }, 1000);
// });

// rxjsBtn.addEventListener('click', () => {
//   rxjsBtn.disabled = true;
//   interval(1000)
//     .pipe(
//       take(people.length),
//       filter((i) => people[i].age >= 18),
//       map((i) => people[i].name),
//       scan((acc, v) => (acc += v), '')
//     )
//     .subscribe(
//       (res) => {
//         display.textContent = res;
//       },
//       null,
//       () => (rxjsBtn.disabled = false)
//     );
// });
