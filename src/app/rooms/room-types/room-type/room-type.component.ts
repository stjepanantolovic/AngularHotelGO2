import { Component, OnInit, OnDestroy } from '@angular/core';
import { Room } from '../../room.model';
import { RoomType } from '../roomType.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RoomTypeService } from '../roomType.service';

@Component({
  selector: 'app-room-type',
  templateUrl: './room-type.component.html',
  styleUrls: ['./room-type.component.css']
})
export class RoomTypeComponent implements OnInit, OnDestroy {
  rTName = "";
  price: number;
  selectedRoomType: RoomType;
  paramsSunscription: Subscription

  constructor(private route: ActivatedRoute, private rTService: RoomTypeService, private router: Router) { }

  ngOnInit() {
    var id = +this.route.snapshot.params['id'];
    this.rTName = this.route.snapshot.params['name'];
    this.price = +this.route.snapshot.params['price'];
    this.selectedRoomType = new RoomType(id, this.rTName, this.price);
    this.paramsSunscription = this.route.params.subscribe(
      (params: Params) => {
        this.selectedRoomType = new RoomType(
          + params['id'],
          params['name'],
          + params['price']
        );
      }
    );
  };

  ngOnDestroy() {
    this.paramsSunscription.unsubscribe();
  }

  onUpdateRT() {
    this.rTService.updateRoomType(this.selectedRoomType.id, this.rTName, this.price);
    this.router.navigate(['/roomTypes']);
  }

  onDelete(){
    this.rTService.deleteRoomType(this.selectedRoomType.id);
    this.router.navigate(['/roomTypes']);
  }
}


