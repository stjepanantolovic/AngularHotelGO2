import { Component, OnInit } from '@angular/core';
import { RoomType } from '../roomType.model';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { RoomTypeService } from '../roomType.service';
import { CanComponentDeactivate } from 'src/app/can-deactivate-guard.service';
import { Observable } from 'rxjs/internal/Observable';


@Component({
  selector: 'app-room-type-by-id',
  templateUrl: './room-type-by-id.component.html',
  styleUrls: ['./room-type-by-id.component.css']
})
export class RoomTypeByIDComponent implements OnInit {
  nextId: number;
  submitText: string;
  updateMode: boolean;
  selectedRoomType: RoomType;


  constructor(private route: ActivatedRoute, private rTService: RoomTypeService, private router: Router) { }

  ngOnInit() {
    if (this.route.snapshot.params['id'] === "createRT") {
      this.rTService.getNextID();
      this.nextId = this.rTService.nextID;
      this.rTService.nextIDUpdated.subscribe(
        (nextId: number) => this.nextId = nextId
      );
      this.selectedRoomType = new RoomType(this.nextId, '', 0);
      this.submitText = 'Create';
      this.updateMode = false;

    }
    else {
      var id = +this.route.snapshot.params['id'];
      this.selectedRoomType = this.rTService.getRoomType(id);
      this.route.params.subscribe(
        (params: Params) => {
          this.selectedRoomType = this.rTService.getRoomType(+ params['id']);
        }
      );
      this.submitText = 'Update';
      this.updateMode = true;
    }
  };

  onUpdateRT() {
    if (this.updateMode) {
      this.rTService.updateRoomType(this.selectedRoomType.id, this.selectedRoomType.rTName, this.selectedRoomType.price);
      this.router.navigate(['/roomTypes']);
    }
    else {
      this.rTService.addRoomTypes(this.selectedRoomType);
      this.rTService.nextIDUpdated.subscribe(
        (nextId: number) => this.nextId = nextId
      );
      this.router.navigate(['/roomTypes'])
    }
  }

  onDelete() {
    this.rTService.deleteRoomType(this.selectedRoomType.id);
    this.router.navigate(['/roomTypes']);
  }

  

}
