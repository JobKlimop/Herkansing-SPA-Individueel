import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Ticket} from '../_models/ticket.model';
import {Injectable} from '@angular/core';

@Injectable()
export class TicketService {
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  private url = environment.nodeUrl;
  private ticket: Ticket[];

  constructor(private http: HttpClient) {

  }

  createTicket(eventName: string, ticket: Ticket): Promise<any> {
    return this.http.post(
      this.url + '/createTicket/' + eventName,
      JSON.stringify(ticket),
      {headers: this.headers})
      .toPromise()
      .then((result) => {
        return result;
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
