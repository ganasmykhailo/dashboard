import {Component, Input, OnInit} from '@angular/core';
import {BsModalRef, ModalOptions} from 'ngx-bootstrap';

@Component({
  selector: 'app-currency-modal',
  templateUrl: './currency-modal.component.html',
  styleUrls: ['./currency-modal.component.scss']
})
export class CurrencyModalComponent implements OnInit {

  @Input()
  set currencyItem(item) {
    this.item = item;
  }

  get currencyItem() {
    return this.item;
  }

  public baseCurrencyOptions = [
    'USD, US Dollar',
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
    'Pending Order',
    'Market Execution',
  ];

  public selectedBase = this.baseCurrencyOptions[0];
  public selectedQuote = this.quoteCurrencyOptions[0];
  public selectedOption = this.typeOption[0];
  public selectedOperation = this.currencyOperations[0];
  public volumeValue = 1.00;
  public disableSpin = false;
  public stopLoss =  1.00000;
  public profit = 0.00000;

  private item;

  constructor(public bsModalRef: BsModalRef, public modalOptions: ModalOptions) {
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

  public incrementValue(value, step) {
    this[value] = +(this[value] + step).toFixed(2);
  }

  public decrementValue(value, step) {
    if (this[value] > 0) {
      this[value] = +(this[value] - step).toFixed(2);
    } else {
      this.disableSpin = true;
    }
  }

  public closeModal() {
    this.bsModalRef.hide();
  }
}
