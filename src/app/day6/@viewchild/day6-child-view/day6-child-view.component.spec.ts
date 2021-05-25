import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day6ChildViewComponent } from './day6-child-view.component';

describe('Day6ChildViewComponent', () => {
  let component: Day6ChildViewComponent;
  let fixture: ComponentFixture<Day6ChildViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day6ChildViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day6ChildViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
