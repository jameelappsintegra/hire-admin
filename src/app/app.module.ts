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
import { GeneralSettingsComponent } from './view/general-settings/general-settings.component';
import { JobDescriptionComponent } from './view/job-openings/job-description/job-description.component';
import { NgCircleProgressModule } from 'ng-circle-progress';

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
    GeneralSettingsComponent,
    JobDescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
