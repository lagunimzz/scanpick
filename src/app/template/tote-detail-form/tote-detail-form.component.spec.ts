import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToteDetailFormComponent } from './tote-detail-form.component';

describe('ToteDetailFormComponent', () => {
  let component: ToteDetailFormComponent;
  let fixture: ComponentFixture<ToteDetailFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToteDetailFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToteDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
