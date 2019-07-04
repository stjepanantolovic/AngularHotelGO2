import { Component, OnInit, Input } from '@angular/core';
import { RoomType } from '../roomType.model';

@Component({
  selector: '[app-room-type-row]',
  templateUrl: './room-type-row.component.html',
  styleUrls: ['./room-type-row.component.css']
})
export class RoomTypeRowComponent implements OnInit {
  @Input() selectedRoomType: RoomType;
  @Input() id: number;
  constructor() { }

  ngOnInit() {
  }

}
