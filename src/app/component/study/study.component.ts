import {Component} from '@angular/core';
import {env_theme} from "../../../theme/theme";

@Component({
  selector: 'app-study',
  templateUrl: './study.component.html',
  styleUrls: ['./study.component.scss']
})
export class StudyComponent {
  theme = env_theme

  menu = [{
    icon: "code.svg",
    title: "ciao"
  },
    {
      icon: "code.svg",
      title: "ciao 2"
    },
    {
      icon: "code.svg",
      title: "ciao 3"
    },
  ]

}
