import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, NgForm, Validators } from '@angular/forms';
import { RoomType } from '../roomType.model';
import { Subscription, Observable } from 'rxjs';
import { ActivatedRoute, Router, Data } from '@angular/router';
import { RoomTypeService } from '../roomType.service';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-room-type-form',
  templateUrl: './room-type-form.component.html',
  styleUrls: ['./room-type-form.component.css']
})
export class RoomTypeFormComponent implements OnInit {
  roomTypeFormGroup: FormGroup;



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
          this.roomTypeFormGroup = new FormGroup({
            'rT': new FormGroup({
              'rTName': new FormControl(this.rTName, Validators.required),
            }),
            'price': new FormControl(this.price, [Validators.required])
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

  }

  onUpdateRT() {
    // this.selectedRoomType.rTName = this.rTName;
    // this.selectedRoomType.price = this.price;

    this.rTName = this.roomTypeFormGroup.get('rT').value.rTName;
    this.price = this.roomTypeFormGroup.value.price;
    this.rTService.updateRoomType(this.id, this.rTName, this.price);
    this.changesSaved = true;
    this.router.navigate(['/roomTypes']);

  }

  onDelete() {
    this.rTService.deleteRoomType(this.selectedRoomType.id);
    this.router.navigate(['/roomTypes']);
  }
  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {

    if ((this.rTName !== this.roomTypeFormGroup.value.rT.rTName || this.price !== this.roomTypeFormGroup.value.price) && !this.changesSaved && this.loggedIn) {
      return confirm('Do you want to discard the changes');
    }
    else {
      return true;
    }
  }

}
