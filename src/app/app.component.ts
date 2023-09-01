import {Component, HostListener} from '@angular/core';
import {LayoutService} from "./layout/layout.service";
import {env_theme} from "../theme/theme";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'BeLife';
  theme = env_theme

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
