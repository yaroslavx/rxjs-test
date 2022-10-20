import { interval, fromEvent } from 'rxjs';
import {
  map,
  filter,
  tap,
  take,
  takeLast,
  takeWhile,
  scan,
  reduce,
  switchMap,
} from 'rxjs/operators';

fromEvent(document, 'click')
  .pipe(
    switchMap(() => {
      return interval(1000).pipe(
        take(5),
        reduce((acc, v) => acc + v, 0)
      );
    })
  )
  .subscribe({
    next: (v) => console.log(v),
    complete: () => console.log('complete'),
  });

// const stream$ = interval(1000).pipe(
//   tap((v) => console.log('tap', v)),
//   takeWhile((v) => v < 5),
//   map((v) => v ** 2),
//   filter((v) => v % 2 !== 0),
//   take(5),
//   takeLast(3),
//   takeWhile((v) => v <= 11),
//   scan((acc, v) => acc + v, 0),
//   reduce((acc, v) => acc + v, 0)
// );

// stream$.subscribe({
//   next: (v) => console.log(v),
//   complete: () => console.log('complete'),
// });
