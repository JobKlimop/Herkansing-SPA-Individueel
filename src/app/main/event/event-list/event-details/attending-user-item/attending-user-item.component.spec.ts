import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendingUserItemComponent } from './attending-user-item.component';

describe('AttendingUserItemComponent', () => {
  let component: AttendingUserItemComponent;
  let fixture: ComponentFixture<AttendingUserItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendingUserItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendingUserItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
