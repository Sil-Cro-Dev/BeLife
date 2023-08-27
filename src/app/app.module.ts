import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SidebarComponent} from './layout/sidebar/sidebar.component';
import {DashboardComponent} from './component/dashboard/dashboard.component';
import {StudyComponent} from './component/study/study.component';
import {NgIconsModule} from "@ng-icons/core";
import {aspectsCode, aspectsCommandLine, aspectsShopBasket} from "@ng-icons/ux-aspects";
import {LogoComponent} from './layout/logo/logo.component';
import {bootstrapChevronDoubleRight} from "@ng-icons/bootstrap-icons";

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    StudyComponent,
    LogoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgIconsModule.withIcons({aspectsCode, aspectsCommandLine, aspectsShopBasket, bootstrapChevronDoubleRight})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
