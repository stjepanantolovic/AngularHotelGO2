import { Component, OnInit, Input } from '@angular/core';
import { RoomType } from '../roomType.model';
import { RoomTypeService } from '../roomType.service';

@Component({
  selector: 'app-room-type-list',
  templateUrl: './room-type-list.component.html',
  styleUrls: ['./room-type-list.component.css']
})
export class RoomTypeListComponent implements OnInit {

  constructor(private rTService: RoomTypeService) { }
  roomTypes: RoomType[];
  filteredRT = '';
  roomTypepropNames=Object.keys(new RoomType(0, '',100));  
  selectedRTProp='';


  ngOnInit() {
    this.roomTypepropNames.push('all');
    this.roomTypes = this.rTService.getRoomTypes();
    this.rTService.roomTypesUpdated.subscribe(
      (rTypes: RoomType[]) => this.roomTypes = rTypes
    );
  }

}
