import { Component, OnInit } from '@angular/core';
import { RoomService } from './room.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
  providers:[RoomService]
})
export class RoomsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
