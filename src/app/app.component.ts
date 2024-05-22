import {Component, Injector} from '@angular/core';
import {createCustomElement} from "@angular/elements";
import {delay, interval, map, mergeMap, of, switchMap, take, zip} from "rxjs";

@Component({
  selector: 'app-menu-side-bar', templateUrl: './app.component.html', styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'menu-side-bar';
  list: Array<{value: string, label: string}> = [];
  showList: Array<{value: string, label: string}> = [];
  obj: any = {
    name: 'nguyen',
    age: 24
  }

  constructor() {
    for (let i = 0; i < 1000000; i++) {
      this.list.push({
        value: i + 1 + '',
        label: 'Item ' + (i + 1),
      })
    }

    console.log(this.list)
    this.showList = this.list
  }


  click() {
    const numbers = interval(1000).pipe(take(5));
    const letters = interval(2000).pipe(take(5), map(i => String.fromCharCode(65 + i)));

    zip(numbers, letters).subscribe(([number, letter]) => {
      console.log(new Date().getSeconds(),`Number: ${number}, Letter: ${letter}`);
    });
  }
}
