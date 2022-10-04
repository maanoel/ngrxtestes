import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-display-contador',
  templateUrl: './display-contador.component.html',
  styleUrls: ['./display-contador.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class DisplayContadorComponent implements OnInit {
  @Input()
  counter = 0;

  constructor() {}

  ngOnInit(): void {}
}
