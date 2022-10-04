import {
  decrementaContador,
  IAppState,
  incrementaContador,
} from './store/app.state';
import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  title = 'ngrx_testes';

  constructor(private store: Store<{ app: IAppState }>) {}

  counter$ = this.store.select('app').pipe(map((e) => e.counter));

  incrementa() {
    this.store.dispatch(incrementaContador());
  }

  decrementa() {
    this.store.dispatch(decrementaContador());
  }
}
