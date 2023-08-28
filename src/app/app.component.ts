import {Component, HostListener} from '@angular/core';
import {LayoutService} from "./layout/layout.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'BeLife';

  constructor(private layoutService: LayoutService) {
  }

  ngOnInit() {
    this.layoutService.getScreenWidth = window.innerWidth;
    this.layoutService.getScreenHeight = window.innerHeight;
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.layoutService.getScreenWidth = window.innerWidth;
    this.layoutService.getScreenHeight = window.innerHeight;
  }
}
