import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesInfoComponent } from './pipes-info.component';

describe('PipesInfoComponent', () => {
  let component: PipesInfoComponent;
  let fixture: ComponentFixture<PipesInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipesInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
