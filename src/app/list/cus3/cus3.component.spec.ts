import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cus3Component } from './cus3.component';

describe('Cus3Component', () => {
  let component: Cus3Component;
  let fixture: ComponentFixture<Cus3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cus3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cus3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
