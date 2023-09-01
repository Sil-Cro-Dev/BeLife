import {Component} from '@angular/core';
import {env_theme} from "../../../theme/theme";

@Component({
  selector: 'app-study',
  templateUrl: './study.component.html',
  styleUrls: ['./study.component.scss']
})
export class StudyComponent {
  theme: any = env_theme;

}
