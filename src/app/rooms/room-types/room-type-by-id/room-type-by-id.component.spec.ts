import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomTypeByIDComponent } from './room-type-by-id.component';

describe('RoomTypeByIDComponent', () => {
  let component: RoomTypeByIDComponent;
  let fixture: ComponentFixture<RoomTypeByIDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomTypeByIDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomTypeByIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
