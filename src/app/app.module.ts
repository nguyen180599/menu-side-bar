import {Injector, NgModule, isDevMode} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {createCustomElement} from "@angular/elements";
import {ScrollingModule} from "@angular/cdk/scrolling";
import { InputTestComponent } from './input-test/input-test.component';

@NgModule({
  declarations: [AppComponent, InputTestComponent], imports: [BrowserModule, ScrollingModule], providers: [], bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    // const el = createCustomElement(AppComponent, {injector});
    // customElements.define('app-menu-side-bar', el);
  }

  ngDoBootstrap(): void {
  }
}

