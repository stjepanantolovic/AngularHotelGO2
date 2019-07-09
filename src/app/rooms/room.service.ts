import { Room } from './room.model';
import { EventEmitter, Injectable } from '@angular/core';
import { RoomTypeService } from './room-types/roomType.service';
import { RoomType } from './room-types/roomType.model';

@Injectable()
export class RoomService {
    roomTypes: RoomType[];
    rooms: Room[] = [];
    // i: number;
    roomCounter = 101;


    constructor(private rTService: RoomTypeService) { }
    roomsUpdated = new EventEmitter<Room[]>();

    getRooms() {
        this.roomTypes = this.rTService.getRoomTypes();
        this.rTService.roomTypesUpdated.subscribe(
            (rTypes: RoomType[]) => this.roomTypes = rTypes
        );

        for (var i = 0; i < this.roomTypes.length; i++) {
            var room = new Room(i + 1, this.roomCounter++, this.roomTypes[i])
            this.rooms.push(room);
        }

        return this.rooms.slice();
    }

    addRoom(room: Room) {
        this.rooms.push(room);
        this.roomsUpdated.emit(this.rooms.slice());
    }
}