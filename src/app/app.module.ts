import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomListComponent } from './rooms/room-list/room-list.component';

import '@angular/material/prebuilt-themes/deeppurple-amber.css';
import {MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, 
  MatSortModule, MatTableModule } from '@angular/material';

import { RoomTypesComponent } from './rooms/room-types/room-types.component';
import { RoomTypeListComponent } from './rooms/room-types/room-type-list/room-type-list.component';
import { RoomTypeRowComponent } from './rooms/room-types/room-type-row/room-type-row.component';
import { RoomTypeService } from './rooms/room-types/roomType.service';
import { HeaderComponent } from './header/header.component';
import { RoomRowComponent } from './rooms/room-row/room-row.component';
import { HomeComponent } from './home/home.component';
import { RoomComponent } from './rooms/room/room.component';
import { RoomTypeComponent } from './rooms/room-types/room-type/room-type.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoomTypeByIDComponent } from './rooms/room-types/room-type-by-id/room-type-by-id.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { CanDeactivateGuard } from './can-deactivate-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { RoomTypeResolver } from './rooms/room-types/room-type/room-type-resolver.service';
import { RoomTypeFormComponent } from './rooms/room-types/room-type-form/room-type-form.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    RoomListComponent,
    RoomTypesComponent,
    RoomTypeListComponent,
    RoomTypeRowComponent,
    HeaderComponent,
    RoomRowComponent,
    HomeComponent,
    RoomComponent,
    RoomTypeComponent,
    RoomTypeByIDComponent,
    PageNotFoundComponent,
    ErrorPageComponent,
    RoomTypeFormComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatSortModule,
    BrowserModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [RoomTypeService, AuthService, AuthGuard, CanDeactivateGuard, RoomTypeResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
