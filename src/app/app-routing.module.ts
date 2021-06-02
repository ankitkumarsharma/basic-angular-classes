import { TemplateFormComponent } from './forms/template-form/template-form.component';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';
import { LoginComponent } from './auth/login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DayComponent } from './day/day/day.component';
import { Day6ParentViewComponent } from './day6/@viewchild/day6-parent-view/day6-parent-view.component';
import { Day6ParentOutputComponent } from './day6/@Output/day6-parent-output/day6-parent-output.component';
import { Day6ParentComponent } from './day6/@input/day6-parent/day6-parent.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { Day6ChildOutputComponent } from './day6/@Output/day6-child-output/day6-child-output.component';
import { AuthGuard } from './auth/auth.guard';
const obj = {name:'ankit', age: 29};
const routes: Routes = [
  {path:'',redirectTo:'login', pathMatch:'full'},
  {path: 'day', canActivate:[AuthGuard], component: DayComponent},
  {path: 'input',canActivate:[AuthGuard], component: Day6ParentComponent},
  {path: 'output', component: Day6ChildOutputComponent},
  {path: 'viewchild/:id', data: obj, component: Day6ParentViewComponent},
  {path: 'list', loadChildren: () => import('./list/list.module').then(m => m.ListModule) },
  {path: 'login', component: LoginComponent},
  {path: 'reactive-forms', component: ReactiveFormComponent},
  {path: 'template-forms', component: TemplateFormComponent},

  {path: '**', component: PageNotFoundComponent} // page not found
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
