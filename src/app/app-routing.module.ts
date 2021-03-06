import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { GeneralSettingsComponent } from './view/general-settings/general-settings.component';
import { JobDescriptionComponent } from './view/job-openings/job-description/job-description.component';
import { JobOpeningsCreateComponent } from './view/job-openings/job-openings-create/job-openings-create.component';
import { JobOpeningsLandingComponent } from './view/job-openings/job-openings-landing/job-openings-landing.component';
import { JobOpeningsListComponent } from './view/job-openings/job-openings-list/job-openings-list.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'job-openings', component: JobOpeningsLandingComponent,
    children: [
      {
        path: 'job-list', // child route path
        component: JobOpeningsListComponent, // child route component that the router renders
      },
      {
        path: 'job-create',
        component: JobOpeningsCreateComponent, // another child route component that the router renders
      },
      {
        path: 'job-description', component: JobDescriptionComponent
      },
      { path: '', redirectTo: 'job-list', pathMatch: 'full' },
      { path: '**', redirectTo: 'job-list', pathMatch: 'full' }
    ]
  },
  {
    path: 'general-settings', component: GeneralSettingsComponent
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
