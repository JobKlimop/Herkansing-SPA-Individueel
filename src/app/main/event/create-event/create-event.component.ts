import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {EventService} from '../../../_services/event.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  createEventForm: FormGroup;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private eventService: EventService) { }

  ngOnInit() {
    this.initForm();
  }

  onSubmit() {
    this.eventService.createEvent(this.createEventForm.value);
    this.router.navigate(['../event'], {relativeTo: this.route});
  }

  onCancel() {
    this.router.navigate(['../event'], {relativeTo: this.route});
  }

  private initForm() {
    let eventName = '';
    let artist = '';
    let eventDate = '';
    let eventTime = '';
    let location = '';
    let noOfTickets: number;
    let eventImage: File;
    // let ticketTypes[] = [
    //   ticketType = '',
    //   price: number
    // ];

    this.createEventForm = new FormGroup({
      'eventName': new FormControl(eventName, Validators.required),
      'artist': new FormControl(artist, Validators.required),
      'eventDate': new FormControl(eventDate, Validators.required),
      'eventTime': new FormControl(eventTime, Validators.required),
      'location': new FormControl(location, Validators.required),
      'noOfTickets': new FormControl(noOfTickets, Validators.required),
      'eventImage': new FormControl(eventImage)
      // 'ticketTypes': [
      //   'ticketType': new FormControl(ticketTypes, Validators.required),
      // ]
    });
  }

}
