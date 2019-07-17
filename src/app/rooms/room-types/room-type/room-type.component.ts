import { Component, OnInit, OnDestroy } from '@angular/core';
import { Room } from '../../room.model';
import { RoomType } from '../roomType.model';
import { ActivatedRoute, Params, Router, CanDeactivate } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { RoomTypeService } from '../roomType.service';
import { CanComponentDeactivate } from 'src/app/can-deactivate-guard.service';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-room-type',
  templateUrl: './room-type.component.html',
  styleUrls: ['./room-type.component.css']
})
export class RoomTypeComponent implements OnInit, CanComponentDeactivate {
  rTName = "";
  price: number;
  selectedRoomType: RoomType;
  paramsSunscription: Subscription;
  changesSaved = false;
  loggedIn = false;

  constructor(private route: ActivatedRoute, private rTService: RoomTypeService, private router: Router, private authService: AuthService) { }

  ngOnInit() {
    var id = +this.route.snapshot.params['id'];
    this.rTName = this.route.snapshot.params['name'];
    this.price = +this.route.snapshot.params['price'];
    this.selectedRoomType = new RoomType(id, this.rTName, this.price);
    this.route.params.subscribe(
      (params: Params) => {
        this.selectedRoomType = new RoomType(
          + params['id'],
          params['name'],
          + params['price']
        );
      }
    );

    this.authService.loggedInUpdated.subscribe(
      (isLoggedIN: boolean) => {
        this.loggedIn = isLoggedIN;
      }
    )
  };



  onUpdateRT() {
    this.selectedRoomType.rTName = this.rTName;
    this.selectedRoomType.price = this.price;
    this.rTService.updateRoomType(this.selectedRoomType.id, this.selectedRoomType.rTName, this.selectedRoomType.price);
    this.changesSaved = true;
    this.router.navigate(['/roomTypes']);

  }

  onDelete() {
    this.rTService.deleteRoomType(this.selectedRoomType.id);
    this.router.navigate(['/roomTypes']);
  }
  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.loggedIn) {
      return true;
    }
    if((this.rTName !== this.selectedRoomType.rTName || this.price!==this.selectedRoomType.price) && !this.changesSaved){
      return confirm('Do you want to discard the changes');
    }
    else{
      return true;
    }
  }
}


