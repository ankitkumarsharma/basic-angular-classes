import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DayComponent } from './day/day/day.component';
import { Day6ParentViewComponent } from './day6/@viewchild/day6-parent-view/day6-parent-view.component';
import { Day6ParentOutputComponent } from './day6/@Output/day6-parent-output/day6-parent-output.component';
import { Day6ParentComponent } from './day6/@input/day6-parent/day6-parent.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Day6ChildOutputComponent } from './day6/@Output/day6-child-output/day6-child-output.component';
const obj = {name:'ankit', age: 29};
const routes: Routes = [
  {path:'',redirectTo:'day', pathMatch:'full'},
  {path: 'day', component: DayComponent},
  {path: 'input', component: Day6ParentComponent},
  {path: 'output', component: Day6ChildOutputComponent},
  {path: 'viewchild/:id', data: obj, component: Day6ParentViewComponent},
  { path: 'list', loadChildren: () => import('./list/list.module').then(m => m.ListModule) },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
