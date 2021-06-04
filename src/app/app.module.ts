import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Day6ParentComponent } from './day6/@input/day6-parent/day6-parent.component';
import { Day6ChildComponent } from './day6/@input/day6-child/day6-child.component';
import { Day6ParentOutputComponent } from './day6/@Output/day6-parent-output/day6-parent-output.component';
import { Day6ChildOutputComponent } from './day6/@Output/day6-child-output/day6-child-output.component';
import { Day6ChildViewComponent } from './day6/@viewchild/day6-child-view/day6-child-view.component';
import { Day6ParentViewComponent } from './day6/@viewchild/day6-parent-view/day6-parent-view.component';
import { DayComponent } from './day/day/day.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './auth/login/login.component';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';
import { TemplateFormComponent } from './forms/template-form/template-form.component';
import { PipesInfoComponent } from './pipes-info/pipes-info.component';
import { FileSizePipe } from './pipes-info/fileSize-pipe/file-size.pipe'; 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    Day6ParentComponent,
    Day6ChildComponent,
    Day6ParentOutputComponent,
    Day6ChildOutputComponent,
    Day6ChildViewComponent,
    Day6ParentViewComponent,
    DayComponent,
    PageNotFoundComponent,
    LoginComponent,
    ReactiveFormComponent,
    TemplateFormComponent,
    PipesInfoComponent,
    FileSizePipe, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
