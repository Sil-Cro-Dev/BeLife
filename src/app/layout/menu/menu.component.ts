import {Component, OnInit} from '@angular/core';
import {routesMenu} from "../../app-routing.module";
import {BreakpointObserver} from "@angular/cdk/layout";

@Component({
  selector: 'side-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  isMobile: boolean = false;
  menu = routesMenu;

  constructor(private obs: BreakpointObserver) {
  }

  ngOnInit() {
    this.obs.observe(['(max-width: 600px)']).subscribe(result => {
      this.isMobile = result.matches
    })
  }


}

