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

  public showFilterBar = false;

  constructor(private dashboardService: DashboardService,
              private orderService: OrderService) {
  }

  ngOnInit() {
    this.orderList = this.orderService.getOrderList();
    this.orderHistory = this.orderService.getOrderHistory();
    this.dashboardService.openTV$.subscribe((value) => this.showTV = value);

    this.news = this.dashboardService.getNews();
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
}
