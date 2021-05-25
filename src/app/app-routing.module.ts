import { DayComponent } from './day/day/day.component';
import { Day6ParentViewComponent } from './day6/@viewchild/day6-parent-view/day6-parent-view.component';
import { Day6ParentOutputComponent } from './day6/@Output/day6-parent-output/day6-parent-output.component';
import { Day6ParentComponent } from './day6/@input/day6-parent/day6-parent.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Day6ChildOutputComponent } from './day6/@Output/day6-child-output/day6-child-output.component';

const routes: Routes = [
  {path: 'day', component: DayComponent},
  {path: 'input', component: Day6ParentComponent},
  {path: 'output', component: Day6ChildOutputComponent},
  {path: 'viewchild', component: Day6ParentViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
