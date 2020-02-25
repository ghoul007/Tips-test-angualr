import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime} from "rxjs/operators"

@Component({
  selector: 'app-debounced',
  templateUrl: './debounced.component.html',
  styleUrls: ['./debounced.component.scss']
})
export class DebouncedComponent  {
    input: string;
    echo: string;
    valueChanged = new Subject<string>();
  constructor() {
     this.valueChanged.pipe(
             debounceTime(500))
            .subscribe(value => {
              this.echo = value;
            });
        this.echo = 'no data';
  }
    changed(text: string) {
        this.valueChanged.next(text);
    }
}
