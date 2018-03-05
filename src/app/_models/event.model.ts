import {Ticket} from './ticket.model';
import {TicketTypes} from './tickettypes.model';

export class Event {
  public eventName: string;
  public eventImageUrl: string;
  public artist: string;
  public eventDate: string;
  public eventTime: string;
  public location: string;
  public noOfTickets: number;
  public ticketTypes: TicketTypes[];
  public ticket: Ticket[];

  constructor(eventName: string, eventImageUrl: string, artist: string, eventDate: string,
              eventTime: string, location: string, noOfTickets: number, ticketTypes: TicketTypes[], ticket: Ticket[]) {
    this.eventName = eventName;
    this.eventImageUrl = eventImageUrl;
    this.artist = artist;
    this.eventDate = eventDate;
    this.eventTime = eventTime;
    this.location = location;
    this.noOfTickets = noOfTickets;
    this.ticketTypes = ticketTypes;
    this.ticket = ticket;
  }
}

