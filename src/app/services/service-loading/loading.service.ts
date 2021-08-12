import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private subject = new Subject<any>();

  constructor() {}

  public sendClickEvent(value: boolean) {
    this.subject.next(value);
  }

  getClickEvent(): Observable<any> {
    return this.subject.asObservable();
  }
}
