import { map, startWith } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

declare var $: any;

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {
  constructor(
    private _fb: FormBuilder,
    private _db: AngularFireDatabase,
    translate: TranslateService
  ) {
    this.createForm();
    this.translate = translate;
    this.translate.setDefaultLang('en');
  }
  TemplateForm: FormGroup;
  options: string[] = ['One', 'Two', 'Three'];

  filteredOptions: Observable<string[]>;

  param = { value: 'world' };
  translate: TranslateService;
  changeLanguage(lang: string) {
    this.translate.use(lang);
  }

  createForm() {
    this.TemplateForm = this._fb.group({
      date: new FormControl(new Date()),
      textNumber: ['', Validators.required],
      alphaNumeric: ['', Validators.required],
      double: '',
      integer: '',
      disabled: [{ value: 'disabled', disabled: true }, Validators.required],
      autoComplete: ''
    });
  }
  showNotification(from, align) {
    const type = ['', 'info', 'success', 'warning', 'danger'];

    const color = Math.floor(Math.random() * 4 + 1);

    $.notify(
      {
        icon: 'notifications',
        message:
          'Welcome to <b>Material Dashboard</b> - a beautiful freebie for every web developer.'
      },
      {
        type: type[color],
        timer: 4000,
        placement: {
          from: from,
          align: align
        },

        template:
          '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
          // tslint:disable-next-line:max-line-length
          '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
          '<i class="material-icons" data-notify="icon">notifications</i> ' +
          '<span data-notify="title">{1}</span> ' +
          '<span data-notify="message">{2}</span>' +
          '<div class="progress" data-notify="progressbar">' +
          // tslint:disable-next-line:max-line-length
          '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
          '</div>' +
          '<a href="{3}" target="{4}" data-notify="url"></a>' +
          '</div>'
      }
    );
  }

  ngOnInit() {
    this._db.list('/test').push('A');
    this.filteredOptions = this.TemplateForm.controls[
      'autoComplete'
    ].valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option =>
      option.toLowerCase().includes(filterValue)
    );
  }
}
