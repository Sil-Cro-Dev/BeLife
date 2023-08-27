import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'logo',
  templateUrl: './logo.component.html',
})
export class LogoComponent implements OnInit, OnChanges {

  @Input() isOpened: boolean = false;
  logo: HTMLElement | null = null;
  logoImg: HTMLElement | null = null;

  ngOnInit() {
    this.logo = document.getElementById("logo");
    this.logoImg = document.getElementById("logoImg");
  }

  ngOnChanges(changes: SimpleChanges) {
    this.changeAttributes()
  }

  changeAttributes() {
    this.changeAttributeLogo();
    this.changeAttributeLogoImg();
  }

  changeAttributeLogo() {
    if (this.logo) {
      if (!this.isOpened) {
        this.logo.classList.remove("block");
        this.logo.classList.add("hidden");
      } else {
        this.logo.classList.remove("hidden");
        this.logo.classList.add("block");
      }
    }
  }

  changeAttributeLogoImg() {
    if (this.logoImg) {
      if (!this.isOpened) {
        this.logoImg.style.transform = "rotate(0deg)";
        this.logoImg.style.transition = "transform 600ms";
      } else {
        this.logoImg.style.transform = "rotate(-540deg)";
      }
    }
  }

}
