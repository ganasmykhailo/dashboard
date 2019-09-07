import { Component, OnInit } from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';

@Component({
  selector: 'app-call-modal',
  templateUrl: './call-modal.component.html',
  styleUrls: ['./call-modal.component.scss']
})
export class CallModalComponent implements OnInit {

  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit() {
  }

}
