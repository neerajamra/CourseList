import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewCoursesComponent } from './add-new-courses.component';

describe('AddNewCoursesComponent', () => {
  let component: AddNewCoursesComponent;
  let fixture: ComponentFixture<AddNewCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewCoursesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
