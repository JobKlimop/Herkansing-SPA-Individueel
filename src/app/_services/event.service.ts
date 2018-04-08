import {environment} from '../../environments/environment';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Event} from '../_models/event.model';
import {User} from '../_models/user.model';

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

  getEventByUser(): Promise<Event[]> {
    return this.http.get(
      this.url + '/getUserEvents',
      {headers: this.headers})
      .toPromise()
      .then((event) => {
        return event as Event[];
      })
      .catch((error) => {
        return this.handleError(error);
      });
  }

  // getAttendingUsers(currentEvent: Event): Promise<User[]> {
  //   const event: Event = new Event(currentEvent.eventName, currentEvent.eventImageUrl, currentEvent.artist, currentEvent.eventDate, currentEvent.eventTime, currentEvent.location, currentEvent.noOfTickets, currentEvent.ticketTypes, currentEvent.ticket);
  //   return this.http.get(
  //     this.url + '/getAttendingUsers/' + event.eventName,
  //     {headers: this.headers})
  //     .toPromise()
  //     .then((response) => {
  //       event.attendingUsers(response);
  //       return event.users as User[];
  //     })
  //     .catch((error) => {
  //       this.handleError(error);
  //     });
  // }

  getAttendingUsers(currentEvent: Event): Promise<User[]> {
    return this.http.get(
      this.url + '/getAttendingUsers/' + currentEvent.eventName,
      {headers: this.headers})
      .toPromise()
      .then((users) => {
        return users as User[];
      });
      // .catch((error) => {
      //   this.handleError(error);
      // });
  }

  createEvent(event: Event): Promise<any> {
    console.log('1.');
    console.log(event);

    return this.http.post(
      this.url + '/createEvent',
      JSON.stringify(event),
      {headers: this.headers})
      .toPromise()
      .then((response) => {
        return response;
      })
      .catch((error) => {
        this.handleError(error);
      });
  }

  private handleError(error: any): Promise<any> {
    console.log('error on event.service');
    return Promise.reject(error.message || error);
  }
}

