import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewHomeworkComponent } from './new-homework.component';

describe('NewHomeworkComponent', () => {
  let component: NewHomeworkComponent;
  let fixture: ComponentFixture<NewHomeworkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewHomeworkComponent]
    });
    fixture = TestBed.createComponent(NewHomeworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
