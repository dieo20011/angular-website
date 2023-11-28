import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private scrollPositionSubject = new Subject<number>();

  constructor() {
    window.addEventListener('scroll', () => {
      this.scrollPositionSubject.next(window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0);
    });
  }

  getScrollPosition(): Observable<number> {
    return this.scrollPositionSubject.asObservable();
  }
}
