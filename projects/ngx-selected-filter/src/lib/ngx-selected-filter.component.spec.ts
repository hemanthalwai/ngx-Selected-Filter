import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NgxSelectedFilterComponent } from './ngx-selected-filter.component';

describe('NgxSelectedFilterComponent', () => {
  let component: NgxSelectedFilterComponent;
  let fixture: ComponentFixture<NgxSelectedFilterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxSelectedFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSelectedFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
