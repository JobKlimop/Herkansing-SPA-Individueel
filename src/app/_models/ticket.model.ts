import {TicketTypes} from './tickettypes.model';
import {User} from './user.model';
import {Event} from './event.model';

export class Ticket {
  user: User;
  event: Event;
  ticketType: TicketTypes;

  constructor(user: User, event: Event, ticketType: TicketTypes) {
    this.user = user;
    this.event = event;
    this.ticketType = ticketType;
  }
}
