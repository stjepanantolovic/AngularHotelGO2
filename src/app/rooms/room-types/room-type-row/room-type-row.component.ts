import { Component, OnInit, Input } from '@angular/core';
import { RoomType } from '../roomType.model';
import { RoomTypeService } from '../roomType.service';
import { Router } from '@angular/router';

@Component({
  selector: '[app-room-type-row]',
  templateUrl: './room-type-row.component.html',
  styleUrls: ['./room-type-row.component.css']
})
export class RoomTypeRowComponent implements OnInit {
  @Input() selectedRoomType: RoomType;
  @Input() id: number;
  constructor(private rTService: RoomTypeService, private router:Router) { }

  ngOnInit() {
  }


  onLoadRoomType(id:number){
this.router.navigate(['/roomTypes',this.selectedRoomType.id, this.selectedRoomType.rTName, this.selectedRoomType.price]);
  }

  onDelete(){
    this.rTService.deleteRoomType(this.selectedRoomType.id);
  }
}
