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

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  public detailCurrency() {
    this.modalService.show(CurrencyModalComponent, {class: `currency-modal ${this.themeFlag ? 'dark-theme' : 'light-theme'}`});
  }

}
