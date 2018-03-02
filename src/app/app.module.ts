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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EventService} from './_services/event.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { EventItemComponent } from './main/event/event-list/event-item/event-item.component';
import { EventDetailsComponent } from './main/event/event-list/event-details/event-details.component';
import {DropdownDirective} from './_shared/dropdown.directive';
import { HomeComponent } from './main/home/home.component';

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
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    EventService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
