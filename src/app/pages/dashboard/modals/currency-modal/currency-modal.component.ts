import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef, ModalOptions } from 'ngx-bootstrap';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-currency-modal',
  templateUrl: './currency-modal.component.html',
  styleUrls: ['./currency-modal.component.scss']
})
export class CurrencyModalComponent implements OnInit {

  @Input()
  set currencyItem(item) {
    console.log(item); // TODO remove console.log
    this.item = item;
  }

  get currencyItem() {
    return this.item;
  }

  public sell;

  public baseCurrencyOptions = [
    'USD, US',
    'GBP, Great Britain Pound',
    'CHF, Swiss Franc',
    'JPY, Japanese Yen',
    'RUB, Russian Ruble',
    'AUD, Australian Dollar',
    'NZD, New Zealand Dollar',
    'CAD, Canadian Dollar',
    'SEK, Sweden Kronor',
    'HKD, Hong Kong Dollar',
    'SGD, Singapore Dollar',
    'MXN, Mexican Peso',
    'NOK, Norway Kroner',
    'DKK, Denmark Kroner',
    'TRY, Turkish Lira',
    'ZAR, South African Rand',
    'CZK, Czech Republic Koruna',
    'HUF, Hungarian Forint',
    'PLN, Polish Zloty',
  ];

  public quoteCurrencyOptions = [
    'EUR, Euro',
    'GBP, Great Britain Pound',
    'CHF, Swiss Franc',
    'JPY, Japanese Yen',
    'RUB, Russian Ruble',
    'AUD, Australian Dollar',
    'NZD, New Zealand Dollar',
    'CAD, Canadian Dollar',
    'SEK, Sweden Kronor',
    'HKD, Hong Kong Dollar',
    'SGD, Singapore Dollar',
    'MXN, Mexican Peso',
    'NOK, Norway Kroner',
    'DKK, Denmark Kroner',
    'TRY, Turkish Lira',
    'ZAR, South African Rand',
    'CZK, Czech Republic Koruna',
    'HUF, Hungarian Forint',
    'PLN, Polish Zloty',
  ];

  public currencyOperations = [
    'TOD',
    'TOM',
    'SPOT',
    'SWOP',
    'FORWARD'
  ];

  public typeOption = [
    'Market Execution',
    'Pending Order',
  ];

  public selectedBase = this.baseCurrencyOptions[0];
  public selectedQuote = this.quoteCurrencyOptions[0];
  public selectedOption = this.typeOption[0];
  public selectedOperation = this.currencyOperations[0];
  public volumeValue = 1.00;
  public disableSpin = false;
  public stopLoss = '0.00000';
  public profit = '0.00000';
  public atPrice = '0.00000';
  public comment;

  private item;

  constructor(public bsModalRef: BsModalRef, public orderService: OrderService) {
  }

  ngOnInit() {
  }

  public selectOption(arr, index: number) {
    switch (arr) {
      case this.baseCurrencyOptions :
        this.selectedBase = arr[index];
        break;

      case this.quoteCurrencyOptions :
        this.selectedQuote = arr[index];
        break;

      case this.currencyOperations :
        this.selectedOperation = arr[index];
        break;

      case this.typeOption :
        this.selectedOption = arr[index];
    }
  }

  public incrementValue(value, step, toFixed: number) {
    this[value] = (+this[value] + step).toFixed(toFixed);
  }

  public decrementValue(value, step, toFixed: number) {
    // if (this[value] > 0) {
    this[value] = (+this[value] - step).toFixed(toFixed);
    // } else {
    //   this.disableSpin = true;
    // }
  }

  public submit() {

    /* tslint:disable */
    this.orderService.orderList.unshift({
      symbol: this.selectedBase,
      ticket: 1000,
      endTime: `${this.getDateTime()}`,
      type: this.sell ? 'Sell' : 'Buy',
      volume: this.volumeValue,
      openPrice: 1.11034,
      currentPrice: 1.11024,
      fee: 0.00,
      profit: +this.profit,
      client: 'BIT Corporation',
      comment: this.comment,
      status: 'pending',
    });
    this.bsModalRef.hide();
  }

  public closeModal() {
    this.bsModalRef.hide();
  }

  private getDateTime() {
    const today = new Date();
    const time = today.getHours() + ':' + today.getMinutes();
    const ampm = today.getHours() >= 12 ? 'pm' : 'am';

    return `${today.getFullYear()}/${today.getMonth()}/${today.getDay()} ${time} ${ampm}`;
  }
}
