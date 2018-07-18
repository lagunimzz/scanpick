import { Subscription } from 'rxjs';
import { ToteDetailService } from '../shared/services/tote-detail.service';
import { BombService } from '../shared/services/bomb.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import { Bomb } from '../shared/models/Bomb';
import { ToteDetail } from '../shared/models/Totedetail';

@Component({
  selector: 'app-print-tote',
  templateUrl: './print-tote.component.html',
  styleUrls: ['./print-tote.component.scss']
})
export class PrintToteComponent implements OnInit {
  programName: String = '[Print Tote] - พิมพ์ลัง';
  printToteForm: FormGroup;
  minDate = new Date(2018, 1, 1);
  bombs: Bomb[];
  toteDetails: ToteDetail[];
  constructor(
    private _fb: FormBuilder,
    private _bombService: BombService,
    private _toteDetailService: ToteDetailService
  ) {}

  getBomb() {
    localStorage.setItem('warehouseCode', 'FC01');
    this._bombService
      .getBomb(this.printToteForm.value.deliveryDate)
      .subscribe(bombs => (this.bombs = bombs));
  }

  ngOnInit() {
    this.printToteForm = this._fb.group({
      deliveryDate: [new Date(), Validators.required],
      bombId: ['', Validators.required],
      routeNo: '',
      storeId: '',
      toteId: ''
    });
    this.getBomb();
  }
  changeDate() {
    this.getBomb();
  }

  mapFormValue(form: any): ToteDetail {
    const toteDetail = new ToteDetail();

    toteDetail.bombID = form.bombId;
    toteDetail.deliveryDate = form.deliveryDate;
    toteDetail.storeID = form.storeId;
    toteDetail.routeNo = form.routeNo;
    toteDetail.toteID = form.toteId;

    return toteDetail;
  }

  onSearch() {
    this._toteDetailService
      .getToteDetail(this.mapFormValue(this.printToteForm.value))
      .subscribe(res => (this.toteDetails = res), error => alert(error));
  }

  addTote(toteDetail: ToteDetail) {
    if (
      confirm('คุณต้องการเพิ่มลังของร้าน ' + toteDetail.storeID + ' ใช่หรือไม่')
    ) {
      toteDetail.deliveryDate = this.printToteForm.value.deliveryDate;
      this._toteDetailService
        .addTote(toteDetail)
        .subscribe(data => data, error => alert(error.message));
    } else {
      return;
    }
  }
}
