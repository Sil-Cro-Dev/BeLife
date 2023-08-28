import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'side-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit, OnChanges {

  @Input() isOpened: boolean = false;
  menu = menu
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

