import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SidebarComponent} from './layout/sidebar/sidebar.component';
import {DashboardComponent} from './component/dashboard/dashboard.component';
import {StudyComponent} from './component/study/study.component';
import {NgIconsModule} from "@ng-icons/core";
import {aspectsCode, aspectsCommandLine, aspectsShopBasket, aspectsMapLocation} from "@ng-icons/ux-aspects";
import {LogoComponent} from './layout/logo/logo.component';
import {bootstrapChevronDoubleRight} from "@ng-icons/bootstrap-icons";
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {environment} from '../environments/environment';
import {provideFirestore, getFirestore} from '@angular/fire/firestore';
import {MenuComponent} from './layout/menu/menu.component';
import {matDashboard} from "@ng-icons/material-icons/baseline";

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    StudyComponent,
    LogoComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgIconsModule.withIcons({
      aspectsCode,
      aspectsCommandLine,
      aspectsShopBasket,
      bootstrapChevronDoubleRight,
      aspectsMapLocation,
      matDashboard
    }),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
