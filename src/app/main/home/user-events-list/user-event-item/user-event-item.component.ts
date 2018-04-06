import {Component, Input, OnInit} from '@angular/core';
import {Event} from '../../../../_models/event.model';

@Component({
  selector: 'app-user-event-item',
  templateUrl: './user-event-item.component.html',
  styleUrls: ['./user-event-item.component.css']
})
export class UserEventItemComponent implements OnInit {
  @Input() event: Event;

  constructor() { }

  ngOnInit() {
  }

}
