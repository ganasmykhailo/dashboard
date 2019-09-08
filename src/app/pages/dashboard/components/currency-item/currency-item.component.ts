import {Component, Input, OnInit} from '@angular/core';
import {BsModalService} from 'ngx-bootstrap';
import {CurrencyModalComponent} from '../../modals/currency-modal/currency-modal.component';

@Component({
  selector: 'app-currency-item',
  templateUrl: './currency-item.component.html',
  styleUrls: ['./currency-item.component.scss']
})
export class CurrencyItemComponent implements OnInit {

  @Input() public currencyItem: any;
  @Input() public themeFlag;
  public buyPrice: string;
  public buyInt: number;
  public sellInt: number;
  public buyDecimal;
  public sellDecimal;

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
    this.buyInt = parseInt(this.currencyItem.buyPrice.value, 10);
    this.sellInt = parseInt(this.currencyItem.sellPrice.value, 10);
    this.buyDecimal = this.getValueAfterDot(parseFloat(this.currencyItem.buyPrice.value).toFixed(1));
    this.sellDecimal = this.getValueAfterDot(parseFloat(this.currencyItem.sellPrice.value).toFixed(1));
  }

  public detailCurrency() {
    this.modalService.show(CurrencyModalComponent, {class: `currency-modal ${this.themeFlag ? 'dark-theme' : 'light-theme'}`, initialState: this.currencyItem});
  }

  public getValueAfterDot(value: string) {
    return String(value).split('.')[1];
  }

}
