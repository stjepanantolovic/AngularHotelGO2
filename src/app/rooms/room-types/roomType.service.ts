
import { EventEmitter } from '@angular/core';
import { RoomType } from './roomType.model';

export class RoomTypeService {
    roomTypes: RoomType[] = [
        new RoomType(0, 'Classic', 100),
        new RoomType(1, 'Classic Sea View', 150),
        new RoomType(2, 'Exclusive', 200),
        new RoomType(3, 'Exclusive Sea View', 250),
        new RoomType(4, 'Fmily Suite', 250),
        new RoomType(5, 'Family Suite Sea View', 300)
    ];

    roomTypesUpdated = new EventEmitter<RoomType[]>();

    getRoomTypes() {
        return this.roomTypes.slice();
    }

    addRoomTypes(roomType: RoomType) {
        this.roomTypes.push(roomType);
        this.roomTypesUpdated.emit(this.roomTypes.slice());
    }

    updateRoomType(id: number, rTName: string, price: number) {
        this.roomTypes[id].rTName = rTName;
        this.roomTypes[id].price = price;
        this.roomTypesUpdated.emit(this.roomTypes.slice());
    }

    deleteRoomType(id: number) {
        this.roomTypes.splice(id, 1);
        this.roomTypesUpdated.emit(this.roomTypes.slice());
    }
}