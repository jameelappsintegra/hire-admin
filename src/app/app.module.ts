import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './layout/header/header.component';
import { JobOpeningsListComponent } from './view/job-openings/job-openings-list/job-openings-list.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { JobOpeningsCreateComponent } from './view/job-openings/job-openings-create/job-openings-create.component';
import { JobOpeningsLandingComponent } from './view/job-openings/job-openings-landing/job-openings-landing.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TheJobComponent } from './view/job-openings/job-openings-create/the-job/the-job.component';
import { WorkFlowComponent } from './view/job-openings/job-openings-create/work-flow/work-flow.component';
import { ApplicationFormComponent } from './view/job-openings/job-openings-create/application-form/application-form.component';
import { FindCandidateComponent } from './view/job-openings/job-openings-create/find-candidate/find-candidate.component';
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LoginComponent,
    HeaderComponent,
    JobOpeningsListComponent,
    DashboardComponent,
    JobOpeningsCreateComponent,
    JobOpeningsLandingComponent,
    TheJobComponent,
    WorkFlowComponent,
    ApplicationFormComponent,
    FindCandidateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TabsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
