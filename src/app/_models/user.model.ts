import {Ticket} from './ticket.model';

export class User {
  userName: string;
  firstName: string;
  middleName: string;
  lastName: string;
  age: number;
  email: string;
  password: string;
  tickets: Ticket[];

  constructor(userName: string, firstName: string, middleName: string, lastName: string,
              age: number, email: string, password: string, tickets: Ticket[]) {
    this.userName = userName;
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
    this.password = password;
    this.tickets = tickets;
  }
}
