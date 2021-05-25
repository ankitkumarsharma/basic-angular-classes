import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day6ParentOutputComponent } from './day6-parent-output.component';

describe('Day6ParentOutputComponent', () => {
  let component: Day6ParentOutputComponent;
  let fixture: ComponentFixture<Day6ParentOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day6ParentOutputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day6ParentOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
