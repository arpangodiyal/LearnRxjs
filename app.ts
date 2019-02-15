import { Observable } from 'rxjs';
import * as Rx from 'rxjs';

const el = document.querySelector('.btn');

const obs1 = {
    next: (s:any)=>{
        console.log('I am observer 1');
    }
}

const obs2 = {
    next: (s:any)=>{
        console.log('I am observer 2');
    }
}

var observable = Rx.fromEvent(el,'click');
let subscriber1 = observable.subscribe(obs1);
let subscriber2 = observable.subscribe(obs2);

setTimeout(()=>{
    subscriber2.unsubscribe();
}, 2000);


