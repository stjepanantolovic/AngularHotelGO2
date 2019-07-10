
import { EventEmitter } from '@angular/core';
import { RoomType } from './roomType.model';

export class RoomTypeService {
    nextID: number;
    idList: number[] = [0, 1, 2, 3, 4, 5];
    roomTypes: RoomType[] = [
        new RoomType(0, 'Classic', 100),
        new RoomType(1, 'Classic Sea View', 150),
        new RoomType(2, 'Exclusive', 200),
        new RoomType(3, 'Exclusive Sea View', 250),
        new RoomType(4, 'Fmily Suite', 250),
        new RoomType(5, 'Family Suite Sea View', 300)
    ];

    roomTypesUpdated = new EventEmitter<RoomType[]>();
    roomTypeUpdated = new EventEmitter<RoomType>();
    nextIDUpdated = new EventEmitter<number>();

    getRoomTypes() {
        return this.roomTypes.slice();
        this.getNextID();

    }

    public getNextID(): number {
        this.nextID = this.idList[this.idList.length - 1] + 1;
        this.nextIDUpdated.emit(this.nextID);
        return this.nextID;
    }
    addRoomTypes(roomType: RoomType) {
        this.roomTypes.push(roomType);
        this.roomTypesUpdated.emit(this.roomTypes.slice());
        this.idList.push(roomType.id);
        this.getNextID();

    }

    updateRoomType(id: number, rTName: string, price: number) {
        const index: number = this.roomTypes.findIndex(x => x.id == id);
        if (index !== -1) {
        this.roomTypes[index].rTName = rTName;
        this.roomTypes[index].price = price;
        this.roomTypesUpdated.emit(this.roomTypes.slice());
        }
    }

    getRoomType(id: number) {
        const roomType = this.roomTypes.find(
            (rT) => {
                return rT.id === id;
            }
        );
        return roomType;
    }

    deleteRoomType(id: number) {
        const index: number = this.roomTypes.findIndex(x => x.id == id);
        if (index !== -1) {
            this.roomTypes.splice(index, 1);
            this.roomTypesUpdated.emit(this.roomTypes.slice());
        }
    }
}