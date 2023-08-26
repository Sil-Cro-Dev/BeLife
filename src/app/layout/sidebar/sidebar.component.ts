import {Component, OnInit} from '@angular/core';
import {env_theme} from "../../../theme/theme";

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  theme = env_theme
  menu = menu

  isOpened: boolean = false;
  navbar: HTMLElement | null = null;
  content: HTMLElement | null = null;
  logo: HTMLElement | null = null;


  ngOnInit(): void {
    this.navbar = document.getElementById("parent-navbar");
    this.content = document.getElementById("content");
    this.logo = document.getElementById("logo");
  }

  toggleNavbar() {
    this.isOpened = !this.isOpened;
    this.changeAttributes();
  }

  changeAttributes() {

    if (!this.isOpened) {

      this.navbar?.classList.remove("w-2/12");
      this.navbar?.classList.add("w-24");
      this.navbar!.style.transition = "width 200ms ease-out"

      this.content?.classList.remove("ml-auto", "w-10/12");
      this.content?.classList.add("ml-24");

      this.logo?.classList.remove("block")
      this.logo?.classList.add("hidden")
    } else {

      this.navbar?.classList.remove("w-24");
      this.navbar?.classList.add("w-2/12");

      this.content?.classList.remove("ml-24");
      this.content?.classList.add("ml-auto", "w-10/12");

      this.logo?.classList.remove("hidden")
      this.logo?.classList.add("block")
    }
  }
}


export const
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
