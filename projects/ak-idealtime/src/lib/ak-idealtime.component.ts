import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { bufferWhen, filter, fromEvent, interval, merge, tap } from 'rxjs';

@Component({
  selector: 'ak-idealtime',
  template: ``,
  styles: []
})
export class AkIdealtimeComponent implements OnInit {

  ACTIVE_EVENTS = [
    'click', 'scroll', 'contextmenu', 'dblclick', 'mousemove',
  ];

  @Input() public idealTime: number = 10000;

  @Output() public timeOutNotification = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    merge(...this.ACTIVE_EVENTS.map(event => fromEvent(document, event))).pipe(
      bufferWhen(() => interval(this.idealTime)),
      filter(events => events.length === 0),
    ).subscribe(res => {
      this.timeOutNotification.emit();
    });
  }

}
