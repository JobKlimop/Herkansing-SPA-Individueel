import { Component, OnInit } from '@angular/core';
import {EventService} from '../../../_services/event.service';
import {Event} from '../../../_models/event.model';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  events: Event[];
  eventArray: Event[];

  constructor(private eventService: EventService) {

  }

  ngOnInit() {
    this.eventService.getAllEvents()
      .then((events) => {
        this.events = events;
        this.eventArray = events;
        console.log(events);
      })
      .catch((error) =>
        console.log(error));
  }
}

