import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public themeFlag = false;
  public visible = 1;

  public orderList = [
    {
      symbol: 'USD/EUR',
      ticket: 1057,
      endTime: '19/07/2019 16:51:23',
      type: 'Buy',
      volume: 10.00,
      openPrice: 1.11034,
      currentPrice: 1.11024,
      fee: 0.00,
      profit: -100.00,
      client: 'BIT Corporation',
      comment: '',
      status: 'order',
    },
    {
      symbol: 'USD/EUR',
      ticket: 1057,
      endTime: '19/07/2019 16:51:23',
      type: 'Buy',
      volume: 10.00,
      openPrice: 1.11034,
      currentPrice: 1.11024,
      fee: 0.00,
      profit: -100.00,
      client: 'BIT Corporation',
      comment: '',
      status: 'pending',
    },
    {
      symbol: 'USD/EUR',
      ticket: 1057,
      endTime: '19/07/2019 16:51:23',
      type: 'Buy',
      volume: 10.00,
      openPrice: 1.11034,
      currentPrice: 1.11024,
      fee: 0.00,
      profit: -100.00,
      client: 'BIT Corporation',
      comment: '',
      status: 'order',
    },
    {
      symbol: 'USD/EUR',
      ticket: 1057,
      endTime: '19/07/2019 16:51:23',
      type: 'Buy',
      volume: 10.00,
      openPrice: 1.11034,
      currentPrice: 1.11024,
      fee: 0.00,
      profit: -100.00,
      client: 'BIT Corporation',
      comment: '',
      status: 'pending',
    },
  ];

  public currencyList = [
    {
      symbol: 'USD/EUR',
      openPrice: 1.10,
      closePrice: 1.10,
      sellPrice: {
        value: 35.5,
        progress: true,
        regress: false,
      },
      buyPrice: {
        value: 36.5,
        progress: true,
        regress: false,
      },
    },
    {
      symbol: 'USD/EUR',
      openPrice: 1.10,
      closePrice: 1.10,
      sellPrice: {
        value: 35.5,
        progress: false,
        regress: false,
      },
      buyPrice: {
        value: 35.5,
        progress: false,
        regress: true,
      },
    },
    {
      symbol: 'USD/EUR',
      openPrice: 1.10,
      closePrice: 1.10,
      sellPrice: {
        value: 35.5,
        progress: true,
        regress: false,
      },
      buyPrice: {
        value: 35.5,
        progress: true,
        regress: false,
      },
    },
  ];

  public ddItemsList = [
    'All',
    'Favorites',
    'Pairs with Orders',
    'Manual Input',
    'Other Options'
  ];

  public ddItemsOptions = [
    'Currencies',
    'Equities',
    'Fixed Income Securities',
    'Forwards',
  ];

  constructor() {}

  ngOnInit() {
  }

  public changedTheme(event) {
    this.themeFlag = event;
  }

  public toggleTab(num: number) {
    this.visible = num;
  }
}
