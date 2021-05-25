import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day6ChildOutputComponent } from './day6-child-output.component';

describe('Day6ChildOutputComponent', () => {
  let component: Day6ChildOutputComponent;
  let fixture: ComponentFixture<Day6ChildOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day6ChildOutputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day6ChildOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
