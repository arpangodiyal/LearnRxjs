import { Observable } from 'rxjs';

var observer = {
    next: (s: any)=>{
        console.log(s);
    },
    error: (err: any)=>{
        console.log(err);
    },
    complete:()=>{
        console.log('Completed');
    }
}

var observable = Observable.create((observer: any)=>{
    observer.next('Hello');
    setTimeout(() => {
        observer.next('World');
    }, 2000);
    setTimeout(()=>{
        observer.complete();
    }, 4000);
}).subscribe(observer)