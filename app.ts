import { Observable } from 'rxjs';
import * as Rx from 'rxjs';

const el = document.querySelector('.btn');

Rx.fromEvent(el,'click')
    .subscribe((
        next=>console.log(next)
    ))

