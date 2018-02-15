// import {environment} from '../../environments/environment.prod';
// import {Injectable} from '@angular/core';
// import {HttpClient, HttpHeaders} from '@angular/common/http';
//
// @Injectable()
// export class EventService {
//   private headers = new HttpHeaders({'Content-Type': 'application/json'});
//   private url = environment.nodeUrl + '/event/';
//   private event: Event[];
//
//   constructor(private http: HttpClient) {
//
//   }
//
//   public getAllEvents(): Promise<Event[]> {
//     return this.http.get(
//       this.url,
//       {headers: this.headers})
//       .toPromise()
//       .then(response => {
//         return response as Event[];
//       })
//       .catch(error => {
//         return this.handleError(error);
//       });
//   }
//
//   private handleError(error: any): Promise<any> {
//     console.log('error on event.service');
//     return Promise.reject(error.message || error);
//   }
// }
//
