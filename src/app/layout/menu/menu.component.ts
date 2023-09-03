import {Component, OnInit} from '@angular/core';
import {routesMenu} from "../../app-routing.module";
import {BreakpointObserver} from "@angular/cdk/layout";
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'side-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  isMobile: boolean = false;
  menu = routesMenu;

  constructor(private obs: BreakpointObserver,
              private router: Router) {
  }

  ngOnInit() {
    this.obs.observe(['(max-width: 600px)']).subscribe(result => {
      this.isMobile = result.matches
    })


    this.router.events.subscribe(
      (event: any) => {
        if (event instanceof NavigationEnd) {
          this.menu.forEach((item) => {
            let doc = document.getElementById(item.path);

            if (item.path == event.url.replace("/", "")) {
              doc?.classList.add('active');
            } else {
              doc?.classList.remove('active');
            }
          })
        }
      }
    )
  }


}
