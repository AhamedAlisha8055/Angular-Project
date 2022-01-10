import { Table1Component } from './table1/table1.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SamfrserviceComponent } from './samfrservice/samfrservice.component';
import { FmComponent } from './fm/fm.component';
import { CrudfmComponent } from './crudfm/crudfm.component';
import { EdlComponent } from './edl/edl.component';
import { EditComponent } from './edl/edit/edit.component';
//import { InsightComponent } from './insight/insight.component';
//import { InsComponent } from './ins/ins.component';


const routes: Routes = [
  {path: "", pathMatch: "full",redirectTo: "/home"},
  {path: "home", component: HomeComponent},
  {path: "table1", component: Table1Component},
  {path: "samfrservice", component: SamfrserviceComponent},
  {path: "fm", component: FmComponent},
  {path: "crudfm", component: CrudfmComponent},
  {path: "edl", component: EdlComponent},
  {path:"edl/detail/add/:id",component:EditComponent},
  {path:"edl/detail/edit/:id",component:EditComponent},
  {path: "admin",loadChildren:()=>import('./admin/admin.module').then(mod=>mod.AdminModule)},
  {path:"user",loadChildren:()=>import('./user/user.module').then(mod=>mod.UserModule)},
  //{path: "insight", component: InsightComponent},
  //{path: "ins", component: InsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
