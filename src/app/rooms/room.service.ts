import { Room } from './room.model';
import { EventEmitter } from '@angular/core';

export class RoomService {
    rooms: Room[] = [
        new Room('101', 'Classic'),
        new Room('102', 'Classic Sea View')
    ];

    roomsUpdated= new EventEmitter<Room[]>();

    getRooms(){
        return this.rooms.slice();
    }

    addRoom(room:Room){
        this.rooms.push(room);
        this.roomsUpdated.emit(this.rooms.slice());
    }
}