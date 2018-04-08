import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './main/header/header.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AccountComponent } from './main/account/account.component';
import { AppRoutingModule } from './app-routing.module';
import { EventComponent } from './main/event/event.component';
import { EventListComponent } from './main/event/event-list/event-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventService } from './_services/event.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { EventItemComponent } from './main/event/event-list/event-item/event-item.component';
import { EventDetailsComponent } from './main/event/event-list/event-details/event-details.component';
import { DropdownDirective } from './_shared/dropdown.directive';
import { HomeComponent } from './main/home/home.component';
import { AuthService } from './_services/auth.service';
import {AuthGuard} from './_services/auth-guard.service';
import {UserService} from './_services/user.service';
import {AuthInterceptor} from './_interceptors/auth.interceptor';
import { UserDetailsComponent } from './main/account/user-details/user-details.component';
import {TicketService} from './_services/ticket.service';
import { UserEventsListComponent } from './main/home/user-events-list/user-events-list.component';
import { UserEventItemComponent } from './main/home/user-events-list/user-event-item/user-event-item.component';
import { UserEditComponent } from './main/account/user-edit/user-edit.component';
import { AttendingUserItemComponent } from './main/event/event-list/event-details/attending-user-item/attending-user-item.component';
import { CreateEventComponent } from './main/event/create-event/create-event.component';
import { OtherUserDetailsComponent } from './main/account/other-user-details/other-user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    AccountComponent,
    EventComponent,
    EventListComponent,
    EventItemComponent,
    EventDetailsComponent,
    DropdownDirective,
    HomeComponent,
    UserDetailsComponent,
    UserEventsListComponent,
    UserEventItemComponent,
    UserEditComponent,
    AttendingUserItemComponent,
    CreateEventComponent,
    OtherUserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    EventService,
    TicketService,
    AuthService,
    AuthGuard,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
