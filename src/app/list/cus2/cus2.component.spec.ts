import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cus2Component } from './cus2.component';

describe('Cus2Component', () => {
  let component: Cus2Component;
  let fixture: ComponentFixture<Cus2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cus2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cus2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
