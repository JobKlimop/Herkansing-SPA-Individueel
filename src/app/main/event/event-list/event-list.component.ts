import { Component, OnInit } from '@angular/core';
// import { EventService} from '../../../_services/event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  // constructor(private eventService: EventService) { }

  allEvents: Event[];

  ngOnInit() {
    // this.eventService.getAllEvents()
    //   .then(events => this.allEvents)
    //   .catch(err => console.log('error'));
  }

}
