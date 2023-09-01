import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SidebarComponent} from './layout/sidebar/sidebar.component';
import {DashboardComponent} from './component/dashboard/dashboard.component';
import {StudyComponent} from './component/study/study.component';
import {NgIconsModule} from "@ng-icons/core";
import {aspectsCode, aspectsCommandLine, aspectsMapLocation, aspectsShopBasket} from "@ng-icons/ux-aspects";
import {LogoComponent} from './layout/logo/logo.component';
import {bootstrapChevronDoubleRight} from "@ng-icons/bootstrap-icons";
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {environment} from '../environments/environment';
import {getFirestore, provideFirestore} from '@angular/fire/firestore';
import {MenuComponent} from './layout/menu/menu.component';
import {ModelGeneratorComponent} from './component/model-generator/model-generator.component';
import {InputComponent} from './component/common/input/input.component';
import {ReactiveFormsModule} from "@angular/forms";
import {matDashboard} from "@ng-icons/material-icons/baseline";
import {TextInputComponent} from './component/common/input/text-input/text-input.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { SelectInputComponent } from './component/common/input/select-input/select-input.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    StudyComponent,
    LogoComponent,
    MenuComponent,
    ModelGeneratorComponent,
    InputComponent,
    TextInputComponent,
    SelectInputComponent,

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
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
