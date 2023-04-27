import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExamcourseComponent } from './exam-course.component';

describe('ExamCourseComponent', () => {
  let component: ExamcourseComponent;
  let fixture: ComponentFixture<ExamcourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamcourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
