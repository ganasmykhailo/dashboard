import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  public orderList = [
    {
      symbol: 'USD/EUR',
      ticket: 1088,
      endTime: '11/07/2019 16:51:23',
      type: 'Buy',
      volume: 8.50,
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
      ticket: 1047,
      endTime: '12/07/2019 16:51:23',
      type: 'Buy',
      volume: 9.00,
      openPrice: 1.11034,
      currentPrice: 1.11024,
      fee: 0.00,
      profit: -110.00,
      client: 'BIT Corporation',
      comment: '',
      status: 'pending',
    },
    {
      symbol: 'USD/EUR',
      ticket: 1057,
      endTime: '15/07/2019 16:51:23',
      type: 'Buy',
      volume: 14.00,
      openPrice: 1.11034,
      currentPrice: 1.11024,
      fee: 0.00,
      profit: 10.00,
      client: 'BIT Corporation',
      comment: '',
      status: 'order',
    },
    {
      symbol: 'USD/EUR',
      ticket: 1081,
      endTime: '14/07/2019 16:51:23',
      type: 'Buy',
      volume: 11.00,
      openPrice: 1.11034,
      currentPrice: 1.11024,
      fee: 0.00,
      profit: 99.00,
      client: 'BIT Corporation',
      comment: '',
      status: 'pending',
    },
  ];

  public orderListHistory = [
    {
      symbol: 'USD/EUR',
      ticket: 1059,
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

  constructor() { }

  public getOrderList() {
    return this.orderList;
  }

  public getOrderHistory() {
    return this.orderListHistory;
  }

  public removeOrder(ticket) {
    this.orderList = this.orderList.filter((item) => {

      if (item.ticket === ticket) {
        this.orderListHistory.push(item);
      }

      return item.ticket !== ticket;
    });
  }
}
