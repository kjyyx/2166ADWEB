import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_data_binding';
  clientName = "Kenji Jaculbia"; //property
  appliedCSS = "green"; //style
  notAppliedCSS = false;
  myColor = "blue";

  clickCount =0
  clickMe(){
    this.clickCount++;
  }

  resetClickCount(){
    this.clickCount=0;
  }
}
