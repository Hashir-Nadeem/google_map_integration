/// <reference types="@types/google.maps" />
import {
  AfterViewInit,
  Component,
  OnInit,
} from '@angular/core';
import { DisplayMapComponent } from '../display-map/display-map.component';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css'],
})
export class AutocompleteComponent implements OnInit, AfterViewInit {
  place:google.maps.places.PlaceResult | undefined
  constructor(private displayMap: DisplayMapComponent) {
  }
  

  ngOnInit() {
    this.displayMap.displayMap([]);
  }
  ngAfterViewInit() {
    const autocomplete = new google.maps.places.Autocomplete(
      document.getElementById('auto') as HTMLInputElement,
      {
        componentRestrictions: { country: 'us' },
      }
    );
    google.maps.event.addListener(autocomplete, 'place_changed', () => {
      const place = autocomplete.getPlace();
      this.place=place
      if (place && place.geometry && place.geometry.location) {
        const lat = place.geometry.location.lat();
        const lng = place.geometry.location.lng();
        this.displayMap.displayMap([lat,lng]);
      }

    });
  }

  saveAddress(_event: any){

    //prevent page from beign reload everytime we save address
    _event?.preventDefault();
    
    if(this.place==undefined){
      alert('Enter Valid Address');
    }
    else{
      //fetch input field,clear and show alert
      var addressInput = document.getElementById('auto') as HTMLInputElement;
      addressInput.value=''
      alert('Address Has Been Saved');

    //all this logic will be replaced create call to database
    const formattedAddress = this.place?.formatted_address;
        const streetMatch = formattedAddress?.match(/([^,]+)/);
        if (streetMatch && streetMatch.length > 1) {
          console.log('street ='+streetMatch[1].trim());
        }
      this.place?.address_components?.forEach(function(component) {
        if (component.types.includes('locality')) {
          console.log('city ='+component.long_name);
        }
        if (component.types.includes('administrative_area_level_1')) {
          console.log('state ='+component.long_name);
        }
        if (component.types.includes('postal_code')) {
          console.log('zip code ='+component.long_name);
        }
        if (component.types.includes('country')) {
          console.log('country: '+component.long_name);
      }
    });

    //setting place undefined again so that we cant save save address again again 
    this.place=undefined
    }
  }
}
