import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cus1Component } from './cus1.component';

describe('Cus1Component', () => {
  let component: Cus1Component;
  let fixture: ComponentFixture<Cus1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cus1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cus1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
