import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-input-test',
  templateUrl: './input-test.component.html',
  styleUrls: ['./input-test.component.scss'],
})
export class InputTestComponent implements OnChanges {
  @Input() obj!: any;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['obj']) {
      console.log(11111, this.obj)
    }
  }
}
