import { RoomType } from './room-types/roomType.model';

export class Room{
    constructor(public id: number, public roomNumber:number, public roomType:RoomType){}
}