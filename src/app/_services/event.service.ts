import {environment} from '../../environments/environment';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Event} from '../_models/event.model';

@Injectable()
export class EventService {
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  private url = environment.nodeUrl;
  private event: Event[];

  constructor(private http: HttpClient) {

  }

  getAllEvents(): Promise<Event[]> {
    return this.http.get(
      this.url + '/getAllEvents',
      {headers: this.headers})
      .toPromise()
      .then(response => {
        return response as Event[];
      })
      .catch(error => {
        return this.handleError(error);
      });
  }

  getEventByName(name: string): Promise<Event> {
    return this.http.get(
      this.url + '/getEvent/' + name,
      {headers: this.headers})
      .toPromise()
      .then(event => {
        return event as Event;
      })
      .catch(error => {
        return this.handleError(error);
      });
  }

  private handleError(error: any): Promise<any> {
    console.log('error on event.service');
    return Promise.reject(error.message || error);
  }
}

