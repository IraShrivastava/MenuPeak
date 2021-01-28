import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PricingComponent } from './pricing/pricing.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PricingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'home', component:HomeComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'price', component:PricingComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
