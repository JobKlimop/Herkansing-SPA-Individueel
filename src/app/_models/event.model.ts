import {Ticket} from './ticket.model';

export class Event {
  public eventName: string;
  public imageUrl: string;
  public artist: string;
  public eventDate: string;
  public eventTime: string;
  public location: String;
  public noOfTickets: number;
  public ticket: Ticket[];

  constructor(eventName: string, imageUrl: string, artist: string, eventDate: string,
              eventTime: string, location: string, noOfTickets: number, ticket: Ticket[]) {
    this.eventName = eventName;
    this.imageUrl = imageUrl;
    this.artist = artist;
    this.eventDate = eventDate;
    this.eventTime = eventTime;
    this.location = location;
    this.noOfTickets = noOfTickets;
    this.ticket = ticket;
  }
}
