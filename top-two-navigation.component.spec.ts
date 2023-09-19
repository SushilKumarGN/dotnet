import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTwoNavigationComponent } from './top-two-navigation.component';

describe('TopTwoNavigationComponent', () => {
  let component: TopTwoNavigationComponent;
  let fixture: ComponentFixture<TopTwoNavigationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopTwoNavigationComponent]
    });
    fixture = TestBed.createComponent(TopTwoNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
