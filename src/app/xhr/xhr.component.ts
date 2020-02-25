import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-xhr',
  templateUrl: './xhr.component.html',
  styleUrls: ['./xhr.component.scss']
})
@Injectable()
export class XhrComponent {
    input: string;
    echo: string;

    constructor(private http: HttpClient) {
        this.echo = '';
    }

    updateEcho() {
        console.log('Fetching data');
        // Update echo
        this.getEcho().subscribe((echo) => {
            this.echo = echo;
        });
    }

    getEcho() : Observable<string> {
        const resp = this.http.get('./assets/echo.json');
        return resp.pipe(map((response: any) => {
            return response.data;
        }));
    }
}
