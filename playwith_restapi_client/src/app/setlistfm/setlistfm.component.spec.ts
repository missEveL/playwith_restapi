import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SetlistfmComponent } from './setlistfm.component';

describe('SetlistfmComponent', () => {
  let component: SetlistfmComponent;
  let fixture: ComponentFixture<SetlistfmComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SetlistfmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetlistfmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
