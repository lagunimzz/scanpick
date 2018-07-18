import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToteDetailFormComponent } from './tote-detail-form/tote-detail-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TemplateComponent } from './template.component';
import { ToteDetailService } from '../shared/services/tote-detail.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatProgressBarModule,
    FlexLayoutModule
  ],
  providers: [ToteDetailService],
  declarations: [ToteDetailFormComponent, TemplateComponent],
  exports: [ToteDetailFormComponent]
})
export class TemplateModule {}
