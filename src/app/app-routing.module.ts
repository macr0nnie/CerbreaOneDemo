import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiteLayoutComponent } from './layouts/site-layout/site-layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PeopleTableComponent } from './components/people-table/people-table.component';
import { ClientsComponent } from './components/clients/clients.component';
import { CommunicationTableComponent } from './components/communication-table/communication-table.component';
import { PreferencesComponent } from './components/preferences/preferences.component';
import { LoginComponent } from './components/login/login.component'; // Import the LoginComponent
const routes: Routes = [

  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: SiteLayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'people', component: PeopleTableComponent },
      { path: 'clients', component: ClientsComponent },
      { path: 'communication', component: CommunicationTableComponent },
      { path: 'preferences', component: PreferencesComponent }, // Add the login route
      { path: '', redirectTo: 'login', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
