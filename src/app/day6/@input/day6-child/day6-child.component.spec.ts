import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day6ChildComponent } from './day6-child.component';

describe('Day6ChildComponent', () => {
  let component: Day6ChildComponent;
  let fixture: ComponentFixture<Day6ChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day6ChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day6ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
