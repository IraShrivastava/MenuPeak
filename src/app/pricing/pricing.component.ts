import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  public freeClicked: boolean = false;
  public annualClicked: boolean = true;
  public monthlyClicked: boolean = false;
  
  constructor() { }

  ngOnInit() {
  }

  public freeButtonClicked() {
    this.freeClicked = true;
    this.annualClicked= false;
    this.monthlyClicked= false;
  }

  public annualButtonClicked() {
    this.freeClicked = false;
    this.annualClicked= true;
    this.monthlyClicked= false;
  }

  public monthlyButtonClicked() {
    this.freeClicked = false;
    this.annualClicked= false;
    this.monthlyClicked= true;
  }

}
