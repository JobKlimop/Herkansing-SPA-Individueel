import {TicketTypes} from './tickettypes.model';

export class Ticket {
  ticketType: TicketTypes;

  constructor(ticketType: TicketTypes) {
    this.ticketType = ticketType;
  }
}
