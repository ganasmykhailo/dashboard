import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  openTV: BehaviorSubject<boolean> = new BehaviorSubject(null);
  openTV$ = this.openTV.asObservable();

  constructor() {
  }

  showTV(value) {
    this.openTV.next(value);
  }
}
