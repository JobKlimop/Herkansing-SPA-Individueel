import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './auth/login/login.component';
import {MainComponent} from './main/main.component';
import {NgModule} from '@angular/core';
import {EventComponent} from './main/event/event.component';
import {EventListComponent} from './main/event/event-list/event-list.component';
import {AccountComponent} from './main/account/account.component';

const appRoutes: Routes = [
  {path: '', component: MainComponent, children: [
      {path: 'event', component: EventComponent, children: [
          {path: '', component: EventListComponent}
        ]},
      {path: 'account', component: AccountComponent}
    ]},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
