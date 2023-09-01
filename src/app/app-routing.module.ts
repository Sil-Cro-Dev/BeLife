import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from "./component/dashboard/dashboard.component";
import {ModelGeneratorComponent} from "./component/model-generator/model-generator.component";

const routes: Routes = [
  {path: "dashboard", component: DashboardComponent},
  {path: "model", component: ModelGeneratorComponent},
  {path: "**", component: DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}


export const routesMenu = [
  {
    path: "dashboard",
    title: "Dashboard",
    icon: "matDashboard",
  },
  {
    path: "model",
    title: "Model Generator",
    icon: "aspectsCode",
  },
  {
    path: "map",
    title: "Maps",
    icon: "aspectsMapLocation",
  },

]
