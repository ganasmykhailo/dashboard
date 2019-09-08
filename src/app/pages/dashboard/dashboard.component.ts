import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { OrderService } from './services/order.service';

declare const TradingView: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  public themeFlag = false;
  public visible = 1;

  public orderList;
  public orderHistory;

  public currencyList = [
    {
      symbol: 'EUR/USD',
      openPrice: 1.10,
      closePrice: 1.10,
      sellPrice: {
        value: 35.5,
        progress: false,
        regress: false,
      },
      buyPrice: {
        value: 36.8,
        progress: true,
        regress: false,
      },
    },
    {
      symbol: 'USD/CHF',
      openPrice: 0.68,
      closePrice: 0.68,
      disabled: true,
      sellPrice: {
        value: 14.7,
        progress: false,
        regress: false,
      },
      buyPrice: {
        value: 14.0,
        progress: false,
        regress: true,
      },
    },
    {
      symbol: 'USD/UAH',
      openPrice: 106,
      closePrice: 106,
      disabled: true,
      sellPrice: {
        value: 54.5,
        progress: false,
        regress: false,
      },
      buyPrice: {
        value: 55.8,
        progress: false,
        regress: true,
      },
    },
    {
      symbol: 'EUR/RUB',
      openPrice: 117,
      closePrice: 117,
      disabled: true,
      sellPrice: {
        value: 58.4,
        progress: false,
        regress: false,
      },
      buyPrice: {
        value: 60.0,
        progress: true,
        regress: false,
      },
    },
    {
      symbol: 'USD/GPB',
      openPrice: 1.32,
      closePrice: 1.32,
      disabled: true,
      sellPrice: {
        value: 51.4,
        progress: false,
        regress: false,
      },
      buyPrice: {
        value: 52.0,
        progress: true,
        regress: false,
      },
    },
    {
      symbol: 'EUR/CHF',
      openPrice: 1.43,
      closePrice: 1.43,
      disabled: true,
      sellPrice: {
        value: 23.5,
        progress: false,
        regress: false,
      },
      buyPrice: {
        value: 24.1,
        progress: true,
        regress: false,
      },
    },
  ];

  public cloneCurrencyList = [];

  public news = [];

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

  public showTV: boolean;
  public showChat: boolean;

  public showFilterBar = false;

  constructor(private dashboardService: DashboardService,
              private orderService: OrderService) {
  }

  ngOnInit() {
    this.orderList = this.orderService.getOrderList();
    this.orderHistory = this.orderService.getOrderHistory();
    this.dashboardService.openTV$.subscribe((value) => this.showTV = value);
    this.dashboardService.openChat$.subscribe((value) => this.showChat = value);

    this.news = this.dashboardService.getNews();

    this.cloneCurrencyList = [...this.currencyList];
  }

  ngAfterViewInit() {
    this.initTradingViewWidget();
  }

  public changedTheme(event) {
    if (event === true) {
      this.initTradingViewWidget('Dark');
    } else {
      this.initTradingViewWidget('Light');
    }
    this.themeFlag = event;
  }

  public toggleTab(num: number) {
    this.visible = num;
  }

  public initTradingViewWidget(theme = 'Light') {
    const widget = new TradingView.widget(
      {
        autosize: true,
        symbol: 'NASDAQ:AAPL',
        interval: 'D',
        timezone: 'Etc/UTC',
        theme,
        style: '1',
        locale: 'en',
        toolbar_bg: '#f1f3f6',
        enable_publishing: false,
        withdateranges: true,
        hide_side_toolbar: false,
        save_image: false,
        container_id: 'tradingview_592cc'
      }
    );
  }

  public sortColumnByfield(array, field) {
    array.sort((a, b) => {
      const valA = a[field];
      const valB = b[field];
      if (valA < valB) {
        return -1;
      }
      if (valA > valB) {
        return 1;
      }

      return 0;
    });
  }

  public removeOrderByTicket(ticket) {
    this.orderService.removeOrder(ticket);
    this.orderList = this.orderService.getOrderList();
    this.orderHistory = this.orderService.getOrderHistory();
  }

  public toggleFilter(isOpen) {
    this.showFilterBar = isOpen;
  }

  public sortCurrency(value) {
    if (value === 'All') {
      this.cloneCurrencyList = [...this.currencyList];
    } else if (value === 'Favorites') {
      this.cloneCurrencyList = [...this.currencyList];
      this.cloneCurrencyList = this.cloneCurrencyList.slice(0, 1);
    } else if (value === 'Pairs with Orders') {
      this.cloneCurrencyList = [...this.currencyList];
      this.cloneCurrencyList = this.cloneCurrencyList.slice(0, 5);
    } else if (value === 'Manual Input') {
      this.cloneCurrencyList = [...this.currencyList];
      this.cloneCurrencyList = this.cloneCurrencyList.slice(3, 5);
    } else if (value === 'Other Options') {
      this.cloneCurrencyList = [...this.currencyList];
    }
  }

  public sortCurrencyBy(value) {
    if (value === 'Currencies') {
      this.cloneCurrencyList = [...this.currencyList];
      this.cloneCurrencyList = this.cloneCurrencyList.slice(0, 4);
    } else if (value === 'Equities') {
      this.cloneCurrencyList = [...this.currencyList];
      this.cloneCurrencyList = this.cloneCurrencyList.slice(0, 2);
    } else if (value === 'Equities') {
      this.cloneCurrencyList = [...this.currencyList];
      this.cloneCurrencyList = this.cloneCurrencyList.slice(1, 3);
    } else if (value === 'Fixed Income Securities') {
      this.cloneCurrencyList = [...this.currencyList];
      this.cloneCurrencyList = this.cloneCurrencyList.slice(3, 5);
    } else if (value === 'Forwards') {
      this.cloneCurrencyList = [...this.currencyList];
    }
  }
}
