import {Component, Input, OnInit} from '@angular/core';

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

  private item;

  constructor() { }

  ngOnInit() {
  }

}
