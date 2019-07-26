import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomTypeFormComponent } from './room-type-form.component';

describe('RoomTypeFormComponent', () => {
  let component: RoomTypeFormComponent;
  let fixture: ComponentFixture<RoomTypeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomTypeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomTypeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
