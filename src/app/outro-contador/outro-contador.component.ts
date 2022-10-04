import { IAppState } from './../store/app.state';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-outro-contador',
  templateUrl: './outro-contador.component.html',
  styleUrls: ['./outro-contador.component.less'],
})
export class OutroContadorComponent implements OnInit {
  constructor(private store: Store<{ app: IAppState }>) {}

  counter$ = this.store.select('app').pipe(map((e) => e.counter));

  ngOnInit(): void {}
}
