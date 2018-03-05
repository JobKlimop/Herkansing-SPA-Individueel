import { Component, OnInit } from '@angular/core';
import {Event} from '../../../../_models/event.model';
import {EventService} from '../../../../_services/event.service';
import {ActivatedRoute, Params} from '@angular/router';
import {TicketTypes} from '../../../../_models/tickettypes.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TicketService} from '../../../../_services/ticket.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event: Event;
  eventName: string;
  ticketTypeArray: TicketTypes[] = [];
  amountArray = [1, 2, 3, 4];
  ticketForm: FormGroup;
  currentPrice: number;
  chosenTicket: TicketTypes;
  chosenPrice: number;
  chosenAmount: number;

  constructor(private eventService: EventService,
              private ticketService: TicketService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.ticketForm = new FormGroup({
      'ticketType': new FormControl(Validators.required),
      'ticketAmount': new FormControl(Validators.required)
    });

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

  optionChosen() {
    const chosen = this.ticketForm.value;
    console.log(this.ticketForm.value);
    this.chosenTicket = chosen.ticketType;
    this.chosenPrice = chosen.ticketType.price;
    this.chosenAmount = chosen.ticketAmount;
    if (this.chosenTicket === null || this.chosenAmount === null || this.chosenTicket === null && this.chosenAmount === null) {
      this.currentPrice = 0;
    } else {
      this.currentPrice = this.chosenAmount * this.chosenPrice;
    }
  }

  getTicket() {
    this.ticketService.createTicket(this.eventName, this.ticketForm.value)
      .then((response) => {
        return response;
      });
  }
}
