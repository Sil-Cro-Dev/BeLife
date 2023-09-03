import {Component} from '@angular/core';
import {env_theme} from "../../../theme/theme";

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  theme: any = env_theme;


}
