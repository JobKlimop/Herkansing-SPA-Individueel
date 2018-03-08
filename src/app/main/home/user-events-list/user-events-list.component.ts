import { Component, OnInit } from '@angular/core';
import {Event} from '../../../_models/event.model';
import {EventService} from '../../../_services/event.service';

@Component({
  selector: 'app-user-events-list',
  templateUrl: './user-events-list.component.html',
  styleUrls: ['./user-events-list.component.css']
})
export class UserEventsListComponent implements OnInit {
  events: Event[];
  eventArray: Event[];

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.eventService.getEventByUser()
      .then((events) => {
        this.events = events;
        this.eventArray = events;
      });
  }

}
