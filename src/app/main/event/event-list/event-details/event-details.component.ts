import { Component, OnInit } from '@angular/core';
import {Event} from '../../../../_models/event.model';
import {EventService} from '../../../../_services/event.service';
import {ActivatedRoute, Params} from '@angular/router';
import {TicketTypes} from '../../../../_models/tickettypes.model';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event: Event;
  eventName: string;
  ticketList: boolean;
  ticketTypeArray: TicketTypes[] = [];

  constructor(private eventService: EventService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.eventName = params['eventName'];
          this.eventService.getEventByName(this.eventName)
            .then((response) => {
              this.event = response;
              this.ticketTypeArray = response.ticketTypes;
              console.log(this.ticketTypeArray);
            });
        });
  }

  toggleTicketList() {
    this.ticketList = !this.ticketList;
  }

  getTicket() {

  }
}
