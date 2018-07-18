import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintToteComponent } from './print-tote.component';

describe('PrintToteComponent', () => {
  let component: PrintToteComponent;
  let fixture: ComponentFixture<PrintToteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintToteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintToteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
