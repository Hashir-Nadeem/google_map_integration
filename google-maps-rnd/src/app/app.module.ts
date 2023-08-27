import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { DisplayMapComponent } from './components/display-map/display-map.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AutocompleteComponent,
    DisplayMapComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    
  ],
  providers: [DisplayMapComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
