import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GiphyComponent } from './giphy.component';

describe('GiphyComponent', () => {
  let component: GiphyComponent;
  let fixture: ComponentFixture<GiphyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GiphyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiphyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
