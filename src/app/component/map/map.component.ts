import {Component} from '@angular/core';
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
})
export class MapComponent {

  mapKey = `https://api.maptiler.com/maps/streets/style.json?key=${environment.mapKey}`

}
