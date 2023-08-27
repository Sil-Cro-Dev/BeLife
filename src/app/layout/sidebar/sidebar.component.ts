import {Component, OnInit} from '@angular/core';
import {env_theme} from "../../../theme/theme";

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {

  theme = env_theme
  menu = menu

  isOpened: boolean = false;
  navbar: HTMLElement | null = null;
  content: HTMLElement | null = null;
  elementLists: HTMLCollectionOf<Element> | undefined;
  elementTitle: HTMLCollectionOf<Element> | undefined;


  ngOnInit(): void {
    this.navbar = document.getElementById("parent-navbar");
    this.content = document.getElementById("content");
    this.elementLists = document.getElementsByClassName("element-list");
    this.elementTitle = document.getElementsByClassName("element-title");
  }

  toggleNavbar() {
    this.isOpened = !this.isOpened;
    this.changeAttributes();
  }

  changeAttributes() {
    this.changeAttributesNavbar();
    this.changeAttributesContent();
    this.changeAttributeElementList();
    this.changeAttributeElementTitle();
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

  changeAttributeElementList() {
    if (this.elementLists) {
      if (!this.isOpened) {
        for (let i = 0; i < this.elementLists.length; i++) {
          this.elementLists[i].classList.remove("border-t", "border-neutral-500/60", "last:border-b")
        }
      } else {
        for (let i = 0; i < this.elementLists.length; i++) {
          this.elementLists[i].classList.add("border-t", "border-neutral-500/60", "last:border-b")
        }
      }
    }
  }

  changeAttributeElementTitle() {
    if (this.elementTitle) {
      if (!this.isOpened) {
        for (let i = 0; i < this.elementTitle.length; i++) {
          this.elementTitle[i].classList.remove("block")
          this.elementTitle[i].classList.add("hidden")
        }
      } else {
        for (let i = 0; i < this.elementTitle.length; i++) {
          this.elementTitle[i].classList.remove("hidden")
          this.elementTitle[i].classList.add("block")
        }
      }

    }
  }

}

export const
  menu = [{
    icon: "aspectsCode",
    title: "ciao"
  },
    {
      icon: "aspectsCommandLine",
      title: "ciao 2"
    },
    {
      icon: "aspectsShopBasket",
      title: "ciao 3"
    },
  ]

