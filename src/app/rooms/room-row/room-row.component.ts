import { Component, OnInit, Input } from '@angular/core';
import { Room } from '../room.model';

@Component({
  selector: '[app-room-row]',
  templateUrl: './room-row.component.html',
  styleUrls: ['./room-row.component.css']
})
export class RoomRowComponent implements OnInit {
  @Input() selectedRoom: Room;
  @Input() id: number;
  constructor() { }

  ngOnInit() {
  }

}
