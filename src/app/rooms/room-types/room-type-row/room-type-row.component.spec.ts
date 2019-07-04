import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomTypeRowComponent } from './room-type-row.component';

describe('RoomTypeRowComponent', () => {
  let component: RoomTypeRowComponent;
  let fixture: ComponentFixture<RoomTypeRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomTypeRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomTypeRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
