import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {EventService} from '../../../_services/event.service';
import {TicketTypes} from '../../../_models/tickettypes.model';
import {assertNumber} from '@angular/core/src/render3/assert';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  createEventForm: FormGroup;
  selectedImage = null;
  refactoredImage: File = null;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private eventService: EventService) {
  }

  ngOnInit() {
    this.initForm();
  }

  onSubmit() {
    // const fileExtension = '.' + this.selectedImage.name.split('.').pop();
    // this.selectedImage.renameFilename = this.createEventForm.value.eventName + fileExtension;
    // this.refactoredImage = <File>this.selectedImage;

    // const fd = new FormData();
    // fd.append('eventImage', this.refactoredImage);
    this.eventService.createEvent(this.createEventForm.value);
    this.router.navigate(['../event'], {relativeTo: this.route});
  }

  onCancel() {
    this.router.navigate(['../event'], {relativeTo: this.route});
  }

  onImageSelected(image) {
    this.selectedImage = image.target.files[0];
    console.log(this.selectedImage);
  }

  private initForm() {

    let eventName = '';
    let artist = '';
    let eventImageUrl = '';
    let eventDate = '';
    let eventTime = '';
    let location = '';
    let noOfTickets = '';
    let ticketTypes = new FormArray([]);
    // let eventImage: File = this.selectedImage;

    this.createEventForm = new FormGroup({
      'eventName': new FormControl(eventName, Validators.required),
      'artist': new FormControl(artist, Validators.required),
      'eventImageUrl': new FormControl(eventImageUrl),
      'eventDate': new FormControl(eventDate, Validators.required),
      'eventTime': new FormControl(eventTime, Validators.required),
      'location': new FormControl(location, Validators.required),
      'noOfTickets': new FormControl(noOfTickets, Validators.required),
      'ticketTypes': ticketTypes
      // 'eventImage': new FormControl(fd)

      // const data = new FormData();
      // data.append('eventName', eventName);
      // data.append('artist', artist);
      // data.append('eventDate', eventDate);
      // data.append('eventTime', eventTime);
      // data.append('location', location);
      // data.append('noOfTickets', noOfTickets);
      // data.append('ticketTypes', JSON.stringify(ticketTypes));
      // data.append('eventImage', eventImage);
    });
  }

  onAddTicketType() {

    const ticketType = '';
    const price = 0;

    (<FormArray>this.createEventForm.get('ticketTypes')).push(
      new FormGroup({
        'ticketType': new FormControl(ticketType, Validators.required),
        'price': new FormControl(price, Validators.required)
      })
    );
  }
}
