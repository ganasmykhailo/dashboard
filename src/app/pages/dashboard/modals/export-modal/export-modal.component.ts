import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'app-call-modal',
  templateUrl: './export-modal.component.html',
  styleUrls: ['./export-modal.component.scss']
})
export class ExportModalComponent implements OnInit {

  public themeFlag;

  constructor(public bsModalRef: BsModalRef,
              private dashboardService: DashboardService) {
  }

  ngOnInit() {
    this.dashboardService.themeFlag$.subscribe((value) => this.themeFlag = value);
  }

  download() {
    window.open('./assets/xml-data/data.csv', '_blank');
    this.bsModalRef.hide();
  }

}
