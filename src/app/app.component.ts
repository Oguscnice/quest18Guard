import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RequestService } from './request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'questGuard18Angular';

  constructor(private http: HttpClient, public request: RequestService) {}

  ngOnInit() {
    this.request.getData();
  }
}
