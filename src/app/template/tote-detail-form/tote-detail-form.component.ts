import { ToteDetail } from './../models/tote-detail';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToteDetailService } from '../../shared/services/tote-detail.service';

@Component({
  selector: 'app-tote-detail-form',
  templateUrl: './tote-detail-form.component.html',
  styleUrls: ['./tote-detail-form.component.css']
})
export class ToteDetailFormComponent implements OnInit {
  toteForm: FormGroup;
  toteDetail: ToteDetail;
  constructor(
    private toteDetailService: ToteDetailService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.createForm();
    this.toteDetail = new ToteDetail();
  }

  createForm() {
    this.toteForm = this.fb.group({
      toteId: ['', Validators.required],
      assignId: ['', Validators.required],
      bombId: ['', Validators.required],
      batchId: ['', Validators.required],
      branchId: ['', Validators.required],
      sumProduct: ['', Validators.required],
      pickQty: ['', Validators.required],
      actualQty: ['', Validators.required],
      shortQty: ['', Validators.required]
    });
  }
  onSubmit() {
    if (this.toteForm.invalid) {
      return;
    }
    const toteDetail = this.getToteDetailFormFormValue(this.toteForm.value);
    // this.saveToteDetail(toteDetail);
  }
  getToteDetailFormFormValue(form: any): ToteDetail {
    const toteDetail = new ToteDetail();
    toteDetail.toteId = form.toteId;
    toteDetail.assignId = form.assignId;
    toteDetail.bombId = form.bombId;
    toteDetail.batchId = form.batchId;
    toteDetail.branchId = form.branchId;
    toteDetail.sumProduct = form.sumProduct;
    toteDetail.pickQty = form.pickQty;
    toteDetail.actualQty = form.actualQty;
    toteDetail.shortQty = form.shortQty;
    toteDetail.toteFlag = 'A';
    toteDetail.printFlag = 'N';
    return toteDetail;
  }
  // saveToteDetail(toteDetail: ToteDetail) {
  //   this.toteDetailService
  //     .saveToteDetail(toteDetail)
  //     .subscribe(message => alert(message), err => alert(err));
  // }
}
