import {Component, OnInit} from '@angular/core';
import {BreakpointObserver} from "@angular/cdk/layout";

@Component({
  selector: 'app-study-menu',
  templateUrl: './study-menu.component.html',
  styleUrls: ['./study-menu.component.scss']
})
export class StudyMenuComponent implements OnInit {

  isMobile: boolean = false;
  menu: any = ["ciao", "ciao3", "ciao2"];

  constructor(private obs: BreakpointObserver) {
  }

  ngOnInit() {
    this.obs.observe(['(max-width: 600px)']).subscribe(result => {
      this.isMobile = result.matches
    })
  }


}
