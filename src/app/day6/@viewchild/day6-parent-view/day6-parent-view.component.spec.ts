import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day6ParentViewComponent } from './day6-parent-view.component';

describe('Day6ParentViewComponent', () => {
  let component: Day6ParentViewComponent;
  let fixture: ComponentFixture<Day6ParentViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day6ParentViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day6ParentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
