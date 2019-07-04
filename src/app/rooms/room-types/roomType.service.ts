
import { EventEmitter } from '@angular/core';
import { RoomType } from './roomType.model';

export class RoomTypeService {
    roomTypes: RoomType[] = [
        new RoomType('Classic', 100),
        new RoomType('Classic Sea View', 150),
        new RoomType('Exclusive', 200),
        new RoomType('Exclusive Sea View', 250),
        new RoomType('Fmily Suite', 250),
        new RoomType('Family Suite Sea View', 300)
    ];

    roomTypesUpdated = new EventEmitter<RoomType[]>();

    getRoomTypes() {
        return this.roomTypes.slice();
    }

    addRoomTypes(roomType: RoomType) {
        this.roomTypes.push(roomType);
        this.roomTypesUpdated.emit(this.roomTypes.slice());
    }
}