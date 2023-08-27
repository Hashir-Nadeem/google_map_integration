import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  selectedMenuItem = ''
  async linkClick(menu : string)
  {
    //load api before autocomplete component get initialized
    const loader = new Loader({
      apiKey: "AIzaSyAeqThAPBANYOIgu-7Rfw7rtvXCJk2ER4c&libraries=places",
    });
    await loader.load()
    this.selectedMenuItem = menu
  }
}
