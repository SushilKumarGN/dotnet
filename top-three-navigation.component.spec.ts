import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopThreeNavigationComponent } from './top-three-navigation.component';

describe('TopThreeNavigationComponent', () => {
  let component: TopThreeNavigationComponent;
  let fixture: ComponentFixture<TopThreeNavigationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopThreeNavigationComponent]
    });
    fixture = TestBed.createComponent(TopThreeNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
