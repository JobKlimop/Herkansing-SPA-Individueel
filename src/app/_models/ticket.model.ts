export class Ticket {
  ticketId: number;
  ticketType: string;
  ticketPrice: number;

  constructor(ticketId: number, ticketType: string, ticketPrice: number) {
    this.ticketId = ticketId;
    this.ticketType = ticketType;
    this.ticketPrice = ticketPrice;
  }
}
