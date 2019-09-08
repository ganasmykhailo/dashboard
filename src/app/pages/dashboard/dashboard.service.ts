import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  openTV: BehaviorSubject<boolean> = new BehaviorSubject(null);
  openTV$ = this.openTV.asObservable();

  themeFlag: BehaviorSubject<boolean> = new BehaviorSubject(null);
  themeFlag$ = this.themeFlag.asObservable();

  openChat: BehaviorSubject<boolean> = new BehaviorSubject(null);
  openChat$ = this.openChat.asObservable();


  constructor() {
  }

  setTheme(value) {
    this.themeFlag.next(value);
  }

  showTV(value) {
    this.openTV.next(value);
  }

  showChat(value) {
    this.openChat.next(value);
  }

  getNews() {
    return [
      {
        price: 0.3,
        currency: 'EUR/USD',
        date: 'Sep 4 2:05AM',
        increase: true,
        news: 'US: Contraction in ISM index — Nordea'
      },
      {
        price: 0.4,
        currency: 'EUR/USD',
        date: 'Sep 4 2:05AM',
        increase: false,
        news: 'Iran’s Official: Will return to nuclear deal commitment only if it receives $15 bln for oil sales in 4 months'
      },
      {
        price: '',
        currency: 'EUR/JPY',
        date: 'Sep 4 2:05AM',
        increase: false,
        news: 'BOJ’s Kataoka: Cutting short-term rate target is most effective tool in stimulating economy'
      },
      {
        price: '',
        currency: 'EUR/USD',
        date: 'Sep 4 2:05AM',
        increase: true,
        news: 'GBP/USD technical analysis: 4H 100MA, 1-week-old '
      },
      {
        price: '',
        currency: 'EUR/USD',
        date: 'Sep 4 2:05AM',
        increase: true,
        news: 'EUR/USD climbs back above 1.10 amid weaker dollar'
      },
    ];
  }

}
