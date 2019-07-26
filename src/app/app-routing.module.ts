import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomTypesComponent } from './rooms/room-types/room-types.component';
import { RoomComponent } from './rooms/room/room.component';
import { RoomType } from './rooms/room-types/roomType.model';
import { RoomTypeComponent } from './rooms/room-types/room-type/room-type.component';
import { RoomTypeByIDComponent } from './rooms/room-types/room-type-by-id/room-type-by-id.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth-guard.service';
import { CanDeactivateGuard } from './can-deactivate-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { RoomTypeResolver } from './rooms/room-types/room-type/room-type-resolver.service';
import { RoomTypeFormComponent } from './rooms/room-types/room-type-form/room-type-form.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'rooms', component: RoomsComponent },
  { path: 'rooms/:id/:name/:price', component: RoomComponent },
  { path: 'rooms/:id', component: RoomComponent },
  {
    path: 'roomTypes', canActivateChild: [AuthGuard], component: RoomTypesComponent, children: [
      { path: ':id/:name/:price', component: RoomTypeFormComponent, canDeactivate: [CanDeactivateGuard], resolve: { rmType: RoomTypeResolver } },
      { path: ':id', component: RoomTypeByIDComponent },
      { path: 'createRT', component: RoomTypeByIDComponent, canDeactivate: [CanDeactivateGuard] }
    ]
  },
  // { path: 'not-found', component: PageNotFoundComponent },
  { path: 'not-found', component: ErrorPageComponent, data: { message: 'Page not found!' } },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
