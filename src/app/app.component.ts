import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
   input: string;
    echo: string;
    constructor() {
        this.echo = 'no data';
    }

  async changed(text: string) {
        console.log('Input has changed to:' + text);
        this.echo = await this.getEcho();
    }

    getEcho() {
        return new Promise<string>((resolve) => {
            setTimeout(() => {
                resolve(this.input);
            }, 1000);
        });
    }
}
