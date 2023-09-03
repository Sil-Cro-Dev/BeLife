import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DashboardComponent} from './component/dashboard/dashboard.component';
import {NgIconsModule} from "@ng-icons/core";
import {aspectsCode, aspectsCommandLine, aspectsMapLocation, aspectsShopBasket} from "@ng-icons/ux-aspects";
import {LogoComponent} from './layout/logo/logo.component';
import {bootstrapChevronDoubleRight} from "@ng-icons/bootstrap-icons";
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {environment} from '../environments/environment';
import {getFirestore, provideFirestore} from '@angular/fire/firestore';
import {MenuComponent} from './layout/menu/menu.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from "@angular/material/sidenav";
import {SidebarComponent} from "./layout/sidebar/sidebar.component";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {matDashboard} from "@ng-icons/material-icons/baseline";
import { ModelGeneratorComponent } from './component/model-generator/model-generator.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    LogoComponent,
    MenuComponent,
    ModelGeneratorComponent,
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
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
