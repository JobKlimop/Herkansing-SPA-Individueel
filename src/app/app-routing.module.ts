import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main/main.component';
import {NgModule} from '@angular/core';
import {EventComponent} from './main/event/event.component';
import {EventListComponent} from './main/event/event-list/event-list.component';
import {AccountComponent} from './main/account/account.component';
import {AuthComponent} from './auth/auth.component';
import {EventDetailsComponent} from './main/event/event-list/event-details/event-details.component';
import {HomeComponent} from './main/home/home.component';
import {RegisterComponent} from './auth/register/register.component';
import {LoginComponent} from './auth/login/login.component';
import {AuthGuard} from './_services/auth-guard.service';
import {UserDetailsComponent} from './main/account/user-details/user-details.component';
import {UserResolver} from './_resolvers/user-resolver.service';
import {UserEventsListComponent} from './main/home/user-events-list/user-events-list.component';
import {UserEditComponent} from './main/account/user-edit/user-edit.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},

  {path: '', canActivate: [AuthGuard], component: MainComponent, children: [
      {path: 'home', component: HomeComponent, resolve: {user: UserResolver}, children: [
          {path: '', component: UserEventsListComponent}
        ]},
      {path: 'event', component: EventComponent, children: [
          {path: '', component: EventListComponent},
          {path: 'details/:eventName', component: EventDetailsComponent}
        ]},
      {path: 'account', component: AccountComponent, resolve: {user: UserResolver}, children: [
          {path: '', component: UserDetailsComponent},
          {path: 'edit', component: UserEditComponent, resolve: {user: UserResolver}}
        ]}
    ]},
  {path: 'auth', component: AuthComponent, children: [
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent}
    ]},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  providers: [UserResolver]
})

export class AppRoutingModule {

}
