import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayContadorComponent } from './display-contador/display-contador.component';
import { appReducer } from './store/app.state';
import { OutroContadorComponent } from './outro-contador/outro-contador.component';

@NgModule({
  declarations: [AppComponent, DisplayContadorComponent, OutroContadorComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ app: appReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
