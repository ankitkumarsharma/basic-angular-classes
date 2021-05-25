import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day6ParentComponent } from './day6-parent.component';

describe('Day6ParentComponent', () => {
  let component: Day6ParentComponent;
  let fixture: ComponentFixture<Day6ParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day6ParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day6ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
