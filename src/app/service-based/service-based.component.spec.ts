import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceBasedComponent } from './service-based.component';

describe('ServiceBasedComponent', () => {
  let component: ServiceBasedComponent;
  let fixture: ComponentFixture<ServiceBasedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceBasedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceBasedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
