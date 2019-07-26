import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { RoomType } from '../roomType.model';
import { RoomTypeService } from '../roomType.service';
import { Observable } from 'rxjs';

export class RoomTypeResolver implements Resolve<RoomType>{
    constructor(private rTService: RoomTypeService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<RoomType> | Promise<RoomType> | RoomType {
        return this.rTService.getRoomType(+route.params['id']);
    }
}