import { Component, OnInit } from '@angular/core';
import { Room } from '../room.model';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css'],
  providers:[RoomService]
})
export class RoomListComponent implements OnInit {
  rooms: Room[];
  constructor(private roomService:RoomService) { }

  ngOnInit() {
    this.rooms=this.roomService.getRooms();
    this.roomService.roomsUpdated.subscribe(
      (rooms:Room[])=>this.rooms=rooms
    );
  }

}
