import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {routesMenu} from "../../app-routing.module";

@Component({
  selector: 'side-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit, OnChanges {

  @Input() isOpened: boolean = false;
  menu = routesMenu
  elementLists: HTMLCollectionOf<Element> | undefined;
  elementTitle: HTMLCollectionOf<Element> | undefined;

  ngOnInit(): void {
    this.elementLists = document.getElementsByClassName("element-list");
    this.elementTitle = document.getElementsByClassName("element-title");
  }

  ngOnChanges(changes: SimpleChanges) {
    this.changeAttributeElementList();
    this.changeAttributeElementTitle();
  }

  changeAttributeElementList() {
    if (this.elementLists) {
      if (!this.isOpened) {
        for (let i = 0; i < this.elementLists.length; i++) {
          this.elementLists[i].classList.remove("sm:justify-start", "sm:px-4", "sm:border-t", "border-neutral-500/60", "sm:last:border-b-0", "sm:last:rounded-b-lg", "sm:first:border-t-0", "sm:first:rounded-t-lg")
          this.elementLists[i].classList.add("sm:justify-center", "rounded-lg")
        }
      } else {
        for (let i = 0; i < this.elementLists.length; i++) {
          this.elementLists[i].classList.remove("sm:justify-center", "rounded-lg")
          this.elementLists[i].classList.add("sm:justify-start", "sm:px-4", "sm:border-t", "border-neutral-500/60", "sm:last:border-b-0", "sm:last:rounded-b-lg", "sm:first:border-t-0", "sm:first:rounded-t-lg")
        }
      }
    }
  }

  changeAttributeElementTitle() {
    if (this.elementTitle) {
      if (!this.isOpened) {
        for (let i = 0; i < this.elementTitle.length; i++) {
          this.elementTitle[i].classList.remove("sm:block")
          this.elementTitle[i].classList.add("sm:hidden")
        }
      } else {
        for (let i = 0; i < this.elementTitle.length; i++) {
          this.elementTitle[i].classList.remove("sm:hidden")
          this.elementTitle[i].classList.add("sm:block")
        }
      }

    }
  }

}

