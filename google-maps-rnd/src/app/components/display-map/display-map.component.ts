
import { Component } from '@angular/core';

@Component({
  selector: 'app-display-map',
  templateUrl: './display-map.component.html',
  styleUrls: ['./display-map.component.css']
})
export class DisplayMapComponent{
  
  map:any;
  coordinates:number[]=[-25.344,131.031];//this should come from config file 
  async displayMap(coordinates:number[]){
    
    if(coordinates.length!=0){
      this.coordinates=coordinates
    }
    this.map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
      zoom: 14,
      center: { lat: this.coordinates[0], lng: this.coordinates[1] }
    });
    const marker = new google.maps.Marker({
      map: this.map,
      position: { lat: this.coordinates[0], lng: this.coordinates[1] },
      title: 'Uluru'
    });

    //in this way we can display the marker and radius of particular job 
    const circle = new google.maps.Circle({
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.35,
      map: this.map,
      center: { lat: this.coordinates[0], lng: this.coordinates[1] },
      radius: 500
    });
    
  
  }
  
  
}
