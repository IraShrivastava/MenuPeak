import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Location]
})
export class AppComponent {
  title = 'MenuPeak';

  constructor(public location:Location){
  }

  public isActive(viewLocation){
    let active = (viewLocation === location.pathname)
    return active;
  }
}
