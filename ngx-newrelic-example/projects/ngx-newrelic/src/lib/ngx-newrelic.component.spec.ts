import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxNewrelicComponent } from './ngx-newrelic.component';

describe('NgxNewrelicComponent', () => {
  let component: NgxNewrelicComponent;
  let fixture: ComponentFixture<NgxNewrelicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxNewrelicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxNewrelicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
