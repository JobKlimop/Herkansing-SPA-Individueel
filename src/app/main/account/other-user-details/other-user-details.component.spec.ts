import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherUserDetailsComponent } from './other-user-details.component';

describe('OtherUserDetailsComponent', () => {
  let component: OtherUserDetailsComponent;
  let fixture: ComponentFixture<OtherUserDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherUserDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherUserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
