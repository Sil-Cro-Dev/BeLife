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
          this.elementLists[i].classList.remove("sm:justify-start", "sm:px-4", "border-t", "border-neutral-500/60", "last:border-b")
          this.elementLists[i].classList.add("sm:justify-center")
        }
      } else {
        for (let i = 0; i < this.elementLists.length; i++) {
          this.elementLists[i].classList.remove("sm:justify-center")
          this.elementLists[i].classList.add("sm:justify-start", "sm:px-4", "border-t", "border-neutral-500/60", "last:border-b")
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

