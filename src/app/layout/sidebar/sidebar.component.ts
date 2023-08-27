import {Component, OnInit} from '@angular/core';
import {env_theme} from "../../../theme/theme";

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {

  theme = env_theme

  isOpened: boolean = false;
  navbar: HTMLElement | null = null;
  content: HTMLElement | null = null;



  ngOnInit(): void {
    this.navbar = document.getElementById("parent-navbar");
    this.content = document.getElementById("content");
  }

  toggleNavbar() {
    this.isOpened = !this.isOpened;
    this.changeAttributes();
  }

  changeAttributes() {
    this.changeAttributesNavbar();
    this.changeAttributesContent();
  }

  changeAttributesNavbar() {
    if (this.navbar) {
      if (!this.isOpened) {
        this.navbar.classList.remove("w-2/12");
        this.navbar.classList.add("w-24");
        this.navbar.style.transition = "width 200ms ease-out"
      } else {
        this.navbar?.classList.remove("w-24");
        this.navbar?.classList.add("w-2/12");
      }
    }
  }

  changeAttributesContent() {
    if (this.content) {
      if (!this.isOpened) {
        this.content.classList.remove("ml-auto", "w-10/12");
        this.content.classList.add("ml-24");
      } else {
        this.content.classList.remove("ml-24");
        this.content.classList.add("ml-auto", "w-10/12");
      }
    }
  }


}
