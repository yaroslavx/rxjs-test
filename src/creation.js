import { of, from, Observable, fromEvent, map } from 'rxjs';
import { range, timer, interval } from 'rxjs';
import { scan } from 'rxjs';

// const stream$ = of(1, 2, 3, 4, 5);
// stream$.subscribe((v) => console.log(v));

// const array$ = from([1, 2, 3, 4, 5]).pipe(scan((acc, v) => acc.concat(v), []));
// array$.subscribe((v) => console.log(v));

// const stream$ = new Observable((observer) => {
//   observer.next('first value');
//   setTimeout(() => observer.next('another 1000'), 1000);
//   setTimeout(() => observer.complete(), 1500);
//   setTimeout(() => observer.error('something wrong'), 2000);
//   setTimeout(() => observer.next('another 3000'), 3000);
// });

// stream$.subscribe(
//   (v) => console.log(v),
//   (err) => console.log(err),
//   (c) => console.log('complete')
// );

// stream$.subscribe({
//   next(v) {
//     console.log(v);
//   },
//   error(err) {
//     console.log(err);
//   },
//   complete() {
//     console.log('complete');
//   },
// });

// fromEvent(document.querySelector('canvas'), 'mousemove')
//   .pipe(
//     map((e) => ({
//       x: e.offsetX,
//       y: e.offsetY,
//       ctx: e.target.getContext('2d'),
//     }))
//   )
//   .subscribe((pos) => pos.ctx.fillRect(pos.x, pos.y, 2, 2));

// const clear$ = fromEvent(document.querySelector('#clear'), 'click');
// clear$.subscribe(() => {
//   const canvas = document.querySelector('canvas');
//   canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
// });

// const sub = interval(500).subscribe((v) => console.log(v));
// setTimeout(() => {
//   sub.unsubscribe();
// }, 4000);

// timer(3000).subscribe((v) => console.log(v));

range(23, 10).subscribe((v) => console.log(v));
