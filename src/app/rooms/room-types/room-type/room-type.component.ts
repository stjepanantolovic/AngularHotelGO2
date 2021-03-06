import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { Room } from '../../room.model';
import { RoomType } from '../roomType.model';
import { ActivatedRoute, Params, Router, CanDeactivate, Data } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { RoomTypeService } from '../roomType.service';
import { CanComponentDeactivate } from 'src/app/can-deactivate-guard.service';
import { AuthService } from 'src/app/auth.service';
import { NgForm, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-room-type',
  templateUrl: './room-type.component.html',
  styleUrls: ['./room-type.component.css']
})
export class RoomTypeComponent implements OnInit, CanComponentDeactivate {
  @ViewChild('f', { static: true }) roomTypeForm: NgForm;
  roomTFormGroup: FormGroup;
  id: number;
  rTName = "";
  price: number;
  selectedRoomType: RoomType;
  paramsSunscription: Subscription;
  changesSaved = false;
  loggedIn = false;

  constructor(private route: ActivatedRoute, private rTService: RoomTypeService, private router: Router, private authService: AuthService) { }

  ngOnInit() {

    this.route.data
      .subscribe(
        (data: Data) => {
          this.selectedRoomType = data['rmType'];
          this.id = this.selectedRoomType.id;
          this.rTName = this.selectedRoomType.rTName;
          this.price = this.selectedRoomType.price;
          this.roomTypeForm.setValue({
            rTName: this.rTName,
            price: this.price
          });

        }
      );
    // var id = +this.route.snapshot.params['id'];
    // this.rTName = this.route.snapshot.params['name'];
    // this.price = +this.route.snapshot.params['price'];
    // this.selectedRoomType = new RoomType(id, this.rTName, this.price);
    // this.route.params.subscribe(
    //   (params: Params) => {
    //     this.selectedRoomType = new RoomType(
    //       + params['id'],
    //       params['name'],
    //       + params['price']
    //     );
    //   }
    // );
    this.loggedIn = this.authService.loggedIn;
    this.authService.loggedInUpdated.subscribe(
      (isLoggedIN: boolean) => {
        this.loggedIn = isLoggedIN;
      }
    )
  };

  onUpdateRT(form: NgForm) {
    // this.selectedRoomType.rTName = this.rTName;
    // this.selectedRoomType.price = this.price;

    this.rTName = form.value.rTName;
    this.price = form.value.price;
    this.rTService.updateRoomType(this.id, this.rTName, this.price);
    this.changesSaved = true;
    this.router.navigate(['/roomTypes']);

  }

  onDelete() {
    this.rTService.deleteRoomType(this.selectedRoomType.id);
    this.router.navigate(['/roomTypes']);
  }
  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {

    if ((this.rTName !== this.selectedRoomType.rTName || this.price !== this.selectedRoomType.price) && !this.changesSaved && this.loggedIn) {
      return confirm('Do you want to discard the changes');
    }
    else {
      return true;
    }
  }
}


