import { Subject, BehaviorSubject, ReplaySubject } from 'rxjs';

// document.addEventListener('click', () => {
//   const stream$ = new Subject();
//   stream$.subscribe((v) => console.log(v));
//   stream$.next('Hello');
// });

// document.addEventListener('click', () => {
//   const stream$ = new BehaviorSubject('some first');
//   stream$.next('hi');
//   stream$.next('friend');
//   stream$.subscribe((v) => console.log(v));
// });

document.addEventListener('click', () => {
  const stream$ = new ReplaySubject(1);
  stream$.next('Hello');
  stream$.next('friend');
  stream$.subscribe((v) => console.log(v));
});
