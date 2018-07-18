import { BombService } from '../../shared/services/bomb.service';
import { firebaseConig } from './../../../environments/firebase.config';
import { NumericDirective } from '../../shared/directives/numeric.directive';
import { DoubleDirective } from './../../shared/directives/double.directive';
import { IntegerDirective } from './../../shared/directives/Integer.directive';
import { TemplateComponent } from './../../template/template.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatTooltipModule,
  MatNativeDateModule,
  MAT_DATE_LOCALE,
  MAT_DATE_FORMATS,
  MatOptionModule,
  ErrorStateMatcher,
  ShowOnDirtyErrorStateMatcher,
  MatIconModule
} from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import { AlphaNumericDirective } from '../../shared/directives/alpha-numeric.directive';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { PrintToteComponent } from '../../print-tote/print-tote.component';
import { ToteDetailService } from '../../shared/services/tote-detail.service';

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL'
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  }
};

@NgModule({
  imports: [
    TranslateModule,
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatInputModule,
    MatTooltipModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    // MatNativeDateModule,
    MatMomentDateModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatListModule,
    AngularFireModule.initializeApp(firebaseConig),
    AngularFireDatabaseModule,
    MatIconModule
  ],
  declarations: [
    DashboardComponent,
    TemplateComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    IntegerDirective,
    DoubleDirective,
    NumericDirective,
    AlphaNumericDirective,
    PrintToteComponent
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'th' },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher },
    BombService,
    ToteDetailService
  ]
})
export class AdminLayoutModule {}
