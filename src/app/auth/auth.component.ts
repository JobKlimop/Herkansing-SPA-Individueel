import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  loginIsOpen = false;
  registerIsOpen = false;

  constructor() { }

  ngOnInit() {
  }

  toggleLogin() {
    this.loginIsOpen = !this.loginIsOpen;
    this.registerIsOpen = false;
  }

  toggleRegister() {
    this.registerIsOpen = !this.registerIsOpen;
    this.loginIsOpen = false;
  }

}
