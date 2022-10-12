import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'app-display-contador',
  templateUrl: './display-contador.component.html',
  styleUrls: ['./display-contador.component.less'],
  encapsulation: ViewEncapsulation.None,
  viewProviders: [{
    provide: ControlContainer,
    useFactory: ControlContainer,
    deps: [[new Optional(), NngForm]]
  }]
})
export class DisplayContadorComponent implements OnInit {
  @Input()
  counter = 0;

  constructor() {}

  ngOnInit(): void {}
}
