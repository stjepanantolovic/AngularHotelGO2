import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomTypesComponent } from './rooms/room-types/room-types.component';
import { RoomComponent } from './rooms/room/room.component';
import { RoomType } from './rooms/room-types/roomType.model';
import { RoomTypeComponent } from './rooms/room-types/room-type/room-type.component';


const appRoutes: Routes=[
  {path: '', component: HomeComponent},
  {path: 'rooms', component: RoomsComponent},
  {path: 'rooms/:id/:name/:price', component: RoomComponent},
  {path: 'roomTypes', component: RoomTypesComponent},
  {path: 'roomTypes/:id/:name/:price', component: RoomTypeComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
