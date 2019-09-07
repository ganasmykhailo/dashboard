import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import {OrderService} from './services/order.service';

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

  public showTV: boolean;

  constructor(private dashboardService: DashboardService,
              private orderService: OrderService) {
  }

  ngOnInit() {
    this.orderList = this.orderService.getOrderList();
    this.orderHistory = this.orderService.getOrderHistory();
    this.dashboardService.openTV$.subscribe((value) => this.showTV = value);
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
}
