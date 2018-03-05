export class TicketTypes {
  public ticketType: string;
  public price: number;

  constructor(ticketType: string, price: number) {
    this.ticketType = ticketType;
    this.price = price;
  }
}
